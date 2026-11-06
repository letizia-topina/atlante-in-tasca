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
  await expect(page.locator(".trip-card")).toHaveCount(7);
  await expect(page.getByRole("heading", { name: title })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Europa", exact: true }),
  ).toHaveCount(1);
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
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Italia", exact: false }).click();
  await expect(page.locator(".trip-card")).toHaveCount(3);
  await page
    .getByRole("textbox", { name: "Cerca nei viaggi" })
    .fill("pale eoliche");
  await expect(page.locator(".trip-card")).toHaveCount(1);
  await page.locator('.trip-card a[href="/viaggi/puglia-matera"]').click();
  await expect(
    page.getByRole("heading", {
      name: "Puglia e Matera, il nostro primo viaggio on the road",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".article-cover img")).toHaveAttribute(
    "src",
    /matera-luce-sui-sassi/,
  );
  await expect(page.locator(".day-card")).toHaveCount(3);
  await expect(page.locator(".souvenir-note")).toContainText("Pane e focaccia");
  await expect(page.locator(".souvenir-note")).toContainText(
    "Forno di Santa Caterina",
  );
  await expect(page.locator(".souvenir-note")).toContainText("Taralli");
  await expect(page.locator(".souvenir-note")).not.toContainText("Cartoline");
  await expect(page.locator(".photo-album")).toHaveCount(10);
  await expect(page.locator(".photo-open img")).toHaveCount(32);
  const sections = await page.locator(".photo-album").evaluateAll((albums) =>
    albums.map((album) => {
      let previous = album.previousElementSibling;
      while (previous && previous.tagName !== "H2")
        previous = previous.previousElementSibling;
      return previous?.id;
    }),
  );
  expect(sections).toEqual([
    "matera",
    "matera",
    "bari",
    "bari",
    "bari",
    "bari",
    "alberobello",
    "alberobello",
    "alberobello",
    "forno-altamura",
  ]);
  const bakery = page.getByRole("region", {
    name: "Il Forno di Santa Caterina",
    exact: true,
  });
  await expect(bakery.locator(".photo-open img")).toHaveCount(3);
  const bakeryOpener = bakery.getByRole("button", {
    name: "Ingrandisci: Le focacce sul banco",
    exact: true,
  });
  await bakeryOpener.click();
  const bakeryDialog = page.getByRole("dialog", {
    name: "Il Forno di Santa Caterina",
    exact: true,
  });
  await expect(bakeryDialog).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(
    bakeryDialog.getByText("L’ingresso del forno", { exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(bakeryOpener).toBeFocused();
  await page
    .locator(".route-stops")
    .getByRole("link", { name: "Matera", exact: true })
    .click();
  await expect(page).toHaveURL(/#matera$/);
  await page
    .locator(".route-stops")
    .getByRole("link", { name: "Alberobello", exact: true })
    .click();
  await expect(page).toHaveURL(/#alberobello$/);
  await decodeImages();
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await noOverflow();
    await page
      .locator(".route-figure")
      .screenshot({ path: `${output}/puglia-route-${width}.png` });
    await page
      .locator(".article-cover")
      .screenshot({ path: `${output}/puglia-cover-${width}.png` });
    await bakery.screenshot({ path: `${output}/puglia-forno-${width}.png` });
    await page
      .locator(".souvenir-note")
      .screenshot({ path: `${output}/puglia-souvenir-${width}.png` });
    await page.screenshot({
      path: `${output}/puglia-${width}.png`,
      fullPage: true,
    });
  }
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Europa", exact: true }).click();
  await expect(page.locator(".trip-card")).toHaveCount(4);
  await page.locator(".europe-category-link").click();
  await expect(page).toHaveURL(/\/europa$/);
  await expect(
    page.getByRole("heading", {
      name: "L’Europa, un ricordo alla volta.",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".trip-card")).toHaveCount(4);
  await page.locator('.trip-card a[href="/viaggi/vienna-natale"]').click();
  await expect(page.locator("h1")).toHaveText(
    "Vienna a Natale, tre giorni tra mercatini e meraviglie",
  );
  await expect(page.locator(".photo-open img")).toHaveCount(62);
  await expect(page.locator(".photo-album--museum")).toHaveCount(2);
  await expect(page.locator(".souvenir-note")).toContainText(
    "Due palline natalizie",
  );
  await expect(page.locator(".souvenir-note")).toContainText("Un segnalibro");
  await page.goto(`${baseURL}/europa`, { waitUntil: "networkidle" });
  await page.locator('.trip-card a[href="/viaggi/parigi-natale"]').click();
  await expect(
    page.getByRole("heading", {
      name: "Parigi a Natale, cinque giorni tra musei e luci sulla Senna",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".article-cover img")).toHaveAttribute(
    "src",
    /louvre-piramide/,
  );
  await expect(page.locator(".day-card")).toHaveCount(5);
  await expect(page.locator(".photo-album")).toHaveCount(20);
  await expect(page.locator(".photo-open img")).toHaveCount(76);
  await expect(page.locator(".photo-album--museum")).toHaveCount(4);
  for (const [name, prefix, count] of [
    ["Le opere del Louvre", "louvre-", 9],
    ["Le opere dell’Orangerie", "orangerie-", 3],
    ["Le opere del Musée d’Orsay", "orsay-", 11],
  ] as const) {
    const collage = page.getByRole("region", { name, exact: true });
    await expect(collage.locator(".photo-open img")).toHaveCount(count);
    const sources = await collage
      .locator(".photo-open img")
      .evaluateAll((images) =>
        images.map((img) => img.getAttribute("src") || ""),
      );
    expect(sources.every((src) => src.includes(prefix))).toBe(true);
  }
  await expect(page.locator(".souvenir-note")).toContainText(
    "pochette in stoffa",
  );
  await expect(page.locator(".souvenir-note")).toContainText("Montmartre");
  await expect(
    page
      .getByRole("region", {
        name: "La nostra tappa da Cédric Grolet",
        exact: true,
      })
      .locator(".photo-open img"),
  ).toHaveCount(2);
  await expect(
    page
      .getByRole("region", {
        name: "Il negozio delle nostre caramelle francesi",
        exact: true,
      })
      .locator(".photo-open img"),
  ).toHaveCount(1);
  await expect(page.locator(".souvenir-note")).toContainText(
    "Caramelle francesi",
  );
  const arcPhotos = page.getByRole("region", {
    name: "La nostra prima sera all’Arco di Trionfo",
    exact: true,
  });
  const eiffelPhotos = page.getByRole("region", {
    name: "La Torre Eiffel, da vicino",
    exact: true,
  });
  const riverPhotos = page.getByRole("region", {
    name: "La nostra Parigi di notte",
    exact: true,
  });
  await expect(
    arcPhotos.locator('img[src*="parigi-notte-insieme"]'),
  ).toHaveCount(1);
  await expect(arcPhotos.locator(".photo-open img")).toHaveCount(4);
  await expect(riverPhotos.locator(".photo-open img")).toHaveCount(1);
  await expect(
    riverPhotos.locator('img[src*="parigi-notte-insieme"]'),
  ).toHaveCount(0);
  await expect(eiffelPhotos.locator(".photo-open img")).toHaveCount(5);
  await expect(eiffelPhotos.locator('img[src*="parigi-vie-"]')).toHaveCount(2);
  await expect(
    page.getByRole("region", {
      name: "Tra le vie intorno all’Opéra",
      exact: true,
    }),
  ).toHaveCount(0);
  await expect(
    page
      .getByRole("region", { name: "Dentro il 59 Rivoli", exact: true })
      .locator(".photo-grid--pair"),
  ).toHaveCount(1);
  const painting = page.getByRole("button", {
    name: "Ingrandisci: La Libertà che guida il popolo",
    exact: true,
  });
  await painting.click();
  const paintingsDialog = page.getByRole("dialog", {
    name: "Le opere del Louvre",
    exact: true,
  });
  await expect(paintingsDialog).toBeVisible();
  await expect(
    paintingsDialog.getByRole("button", { name: "Foto successiva" }),
  ).toBeDisabled();
  await page.keyboard.press("ArrowLeft");
  await expect(
    paintingsDialog.getByText("Noi due davanti al dipinto", { exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(painting).toBeFocused();
  await page
    .locator(".route-stops")
    .getByRole("link", { name: "Un ultimo giro", exact: true })
    .click();
  await expect(page).toHaveURL(/#giorno-5$/);
  await decodeImages();
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await noOverflow();
    const proportions = await page
      .locator(".photo-grid--museum .photo-open img")
      .evaluateAll((images) =>
        images.every((img) => {
          if (!(img instanceof HTMLImageElement)) return false;
          const rect = img.getBoundingClientRect();
          return (
            Math.abs(
              rect.width / rect.height - img.naturalWidth / img.naturalHeight,
            ) < 0.02
          );
        }),
      );
    expect(proportions).toBe(true);
    await page
      .getByRole("region", { name: "Le opere dell’Orangerie", exact: true })
      .screenshot({ path: `${output}/paris-collage-${width}.png` });
    await page
      .locator(".souvenir-note")
      .screenshot({ path: `${output}/paris-souvenir-${width}.png` });
    await page
      .locator(".article-cover")
      .screenshot({ path: `${output}/paris-cover-${width}.png` });
    if (width !== 768)
      await page.screenshot({
        path: `${output}/paris-${width}.png`,
        fullPage: true,
      });
  }
  await page.goto(`${baseURL}/europa`, { waitUntil: "networkidle" });
  await expect(page.locator(".trip-card")).toHaveCount(4);
  await page.locator('.trip-card a[href="/viaggi/copenaghen"]').click();
  await expect(
    page.getByRole("heading", {
      name: "Copenaghen, la città dei canali che ci ha conquistati",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".souvenir-note")).toContainText(
    "Due piccoli personaggi LEGO",
  );
  await expect(page.locator(".day-card")).toHaveCount(3);
  await decodeImages();
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await noOverflow();
    await page
      .locator(".related-trip")
      .screenshot({ path: `${output}/copenhagen-malmo-link-${width}.png` });
    await page
      .locator(".souvenir-note")
      .screenshot({ path: `${output}/copenhagen-souvenir-${width}.png` });
    if (width !== 768)
      await page.screenshot({
        path: `${output}/copenhagen-${width}.png`,
        fullPage: true,
      });
  }
  await expect(page.locator(".photo-album")).toHaveCount(15);
  await expect(page.locator(".photo-open img")).toHaveCount(41);
  await expect(page.locator(".article-cover img")).toHaveAttribute(
    "src",
    /nyhavn-colori/,
  );
  await page
    .getByRole("link", {
      name: "Leggi il nostro racconto di Malmö",
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/\/viaggi\/malmo$/);
  await expect(
    page.getByRole("heading", {
      name: "Malmö, un giorno in Svezia partendo da Copenaghen",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".article-meta")).toContainText("1 giorno");
  await expect(page.locator(".article-meta")).not.toContainText("1 giorni");
  await expect(page.locator(".souvenir-note")).toContainText("Calamite");
  await expect(page.locator(".souvenir-note")).toContainText("Cartoline");
  await expect(page.locator(".day-card")).toHaveCount(1);
  await expect(page.locator(".photo-album")).toHaveCount(9);
  await expect(page.locator(".photo-open img")).toHaveCount(25);
  await expect(page.locator(".article-cover img")).toHaveAttribute(
    "src",
    /stortorget-luce/,
  );
  await decodeImages();
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await noOverflow();
    if (width !== 768)
      await page.screenshot({
        path: `${output}/malmo-${width}.png`,
        fullPage: true,
      });
  }
  await page
    .getByRole("link", {
      name: "Torna al nostro viaggio a Copenaghen",
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/\/viaggi\/copenaghen#giorno-3$/);
  await expect(
    page.getByRole("heading", {
      name: "Il terzo giorno, una parentesi svedese a Malmö",
      exact: true,
    }),
  ).toBeVisible();
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
