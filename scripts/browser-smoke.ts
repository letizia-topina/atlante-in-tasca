import { chromium, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";
const baseURL = process.env.BASE_URL || "http://localhost:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const title =
  "Pisa e San Gimignano, un weekend tra meraviglie toscane e atmosfere medievali";
const output = "/tmp/atlante-qa";
await mkdir(output, { recursive: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1100 },
  });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const decodeImages = () =>
    page.locator("img").evaluateAll(async (images) => {
      for (const image of images) {
        if (!(image instanceof HTMLImageElement)) continue;
        image.loading = "eager";
        await image.decode();
      }
    });
  const noOverflow = async () =>
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await expect(page.locator(".trip-card")).toHaveCount(2);
  await expect(page.getByRole("heading", { name: title })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Europa", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByText(/Unsplash|stori[ae] di esempio|treni presi al volo/i),
  ).toHaveCount(0);
  await decodeImages();
  await page.screenshot({ path: `${output}/desktop.png`, fullPage: true });
  await page.getByRole("button", { name: "Italia", exact: false }).click();
  const search = page.getByRole("textbox", { name: "Cerca nei viaggi" });
  await search.fill("Dante");
  await expect(page.locator(".trip-card")).toHaveCount(1);
  await search.fill("Atlantide");
  await expect(
    page.getByRole("heading", {
      name: "La prossima avventura è ancora da scrivere.",
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Mostra tutti i viaggi" }).click();
  await expect(search).toHaveValue("");
  await page.locator('.trip-card a[href="/viaggi/pisa-san-gimignano"]').click();
  await expect(
    page.getByRole("heading", { name: title, exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("figure", {
      name: "Da Latina, un piccolo giro di Toscana.",
    }),
  ).toBeVisible();
  await page
    .locator(".route-stops")
    .getByRole("link", { name: "Pisa", exact: true })
    .click();
  await expect(page).toHaveURL(/#pisa$/);
  await page
    .locator(".route-stops")
    .getByRole("link", { name: "San Gimignano", exact: true })
    .click();
  await expect(page).toHaveURL(/#san-gimignano$/);
  await expect(page.locator(".day-card")).toHaveCount(2);
  await expect(page.locator(".article-cover img")).toHaveAttribute(
    "src",
    /insieme-a-pisa/,
  );
  await expect(
    page.getByRole("complementary", { name: "I nostri souvenir del viaggio" }),
  ).toContainText("Calamite");
  await expect(page.locator(".souvenir-note")).toContainText("Cartoline");
  await expect(
    page.getByRole("heading", {
      name: "Il nostro souvenir: calamite, cartoline e ricordi",
    }),
  ).toBeVisible();
  await expect(page.locator(".photo-album")).toHaveCount(7);
  await expect(page.locator(".photo-open img")).toHaveCount(19);
  const opener = page.getByRole("button", {
    name: "Ingrandisci: Ai piedi della Torre",
    exact: true,
  });
  await opener.click();
  const photoDialog = page.getByRole("dialog", {
    name: "Noi e la Torre",
    exact: true,
  });
  await expect(photoDialog).toBeVisible();
  await expect(
    photoDialog.getByRole("button", { name: "Foto precedente" }),
  ).toBeDisabled();
  await page.keyboard.press("ArrowRight");
  await expect(
    photoDialog.getByText("La nostra cartolina da Pisa", { exact: true }),
  ).toBeVisible();
  await expect(
    photoDialog.getByRole("button", { name: "Foto successiva" }),
  ).toBeDisabled();
  await page.keyboard.press("ArrowLeft");
  await expect(
    photoDialog.getByText("Ai piedi della Torre", { exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(photoDialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  await decodeImages();
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await noOverflow();
    await page
      .locator(".souvenir-note")
      .screenshot({ path: `${output}/souvenir-${width}.png` });
    await page
      .locator(".article-cover")
      .screenshot({ path: `${output}/cover-${width}.png` });
    await page
      .locator(".photo-album--mixed")
      .first()
      .screenshot({ path: `${output}/photos-${width}.png` });
    await page.screenshot({
      path: `${output}/article-${width}.png`,
      fullPage: true,
    });
  }
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page
    .getByRole("textbox", { name: "Cerca nei viaggi" })
    .fill("traghetto Positano");
  await expect(page.locator(".trip-card")).toHaveCount(1);
  await page
    .locator('.trip-card a[href="/viaggi/costiera-amalfitana"]')
    .click();
  await expect(
    page.getByRole("heading", {
      name: "Costiera Amalfitana, panorami che profumano di mare",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".article-cover img")).toHaveAttribute(
    "src",
    /panorama-positano/,
  );
  await expect(page.locator(".photo-open img")).toHaveCount(23);
  await expect(page.locator(".photo-album")).toHaveCount(8);
  await expect(page.locator(".day-card")).toHaveCount(3);
  await expect(
    page.getByRole("region", {
      name: "La Costiera dal traghetto",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".souvenir-note")).toContainText("Calamite");
  await expect(page.locator(".souvenir-note")).toContainText("Cartoline");
  await page
    .locator(".route-stops")
    .getByRole("link", { name: "Vietri sul Mare", exact: true })
    .click();
  await expect(page).toHaveURL(/#vietri$/);
  const coastOpener = page.getByRole("button", {
    name: "Ingrandisci: La nostra cartolina dal traghetto",
    exact: true,
  });
  await coastOpener.click();
  await expect(
    page.getByRole("dialog", {
      name: "La Costiera dal traghetto",
      exact: true,
    }),
  ).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await expect(
    page
      .getByRole("dialog")
      .getByText("Amalfi, vista dal mare", { exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(coastOpener).toBeFocused();
  await decodeImages();
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await noOverflow();
    await page
      .locator(".route-figure")
      .screenshot({ path: `${output}/costiera-route-${width}.png` });
    await page
      .locator(".souvenir-note")
      .screenshot({ path: `${output}/costiera-souvenir-${width}.png` });
    await page.screenshot({
      path: `${output}/costiera-${width}.png`,
      fullPage: true,
    });
  }
  for (const slug of ["cinque-terre", "kyoto", "dolomiti", "missing-trip"]) {
    const response = await page.goto(`${baseURL}/viaggi/${slug}`);
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { name: "Una piccola deviazione." }),
    ).toBeVisible();
  }
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await decodeImages();
  await noOverflow();
  await page.screenshot({ path: `${output}/mobile.png`, fullPage: true });
  await page.getByRole("link", { name: "Chi siamo", exact: true }).click();
  await expect(
    page.getByRole("heading", {
      name: "Due zaini. La stessa voglia di partire.",
    }),
  ).toBeVisible();
  await expect(page.getByText(/foto preferite/)).toBeVisible();
  expect(errors).toEqual([]);
  console.log(
    "Browser checks passed: real content only, search, itinerary links, removed routes, image decoding, and responsive layouts.",
  );
} finally {
  await browser.close();
}
