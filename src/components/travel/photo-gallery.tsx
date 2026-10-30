"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};
export type PhotoAlbum = {
  label: string;
  note: string;
  layout: string;
  photos: GalleryPhoto[];
};

export function PhotoGallery({ album }: { album: PhotoAlbum }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : album.photos[selected];
  useEffect(() => {
    if (selected !== null && !dialog.current?.open) dialog.current?.showModal();
  }, [selected]);
  const close = () => dialog.current?.close();
  const move = (direction: number) =>
    setSelected((index) =>
      index === null
        ? null
        : Math.max(0, Math.min(album.photos.length - 1, index + direction)),
    );
  return (
    <section
      className={`photo-album photo-album--${album.layout}`}
      aria-label={album.label}
    >
      <div className="album-heading">
        <span className="eyebrow">DAL NOSTRO ALBUM</span>
        <span>{album.label}</span>
      </div>
      <div className={`photo-grid photo-grid--${album.layout}`}>
        {album.photos.map((entry, index) => {
          const photo = entry;
          return (
            <figure className="photo-print" key={entry.src}>
              <button
                type="button"
                className="photo-open"
                aria-label={`Ingrandisci: ${entry.caption}`}
                aria-haspopup="dialog"
                onClick={() => {
                  setSelected(index);
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={
                    album.layout === "four"
                      ? "(max-width: 640px) 45vw, 240px"
                      : "(max-width: 640px) 90vw, 600px"
                  }
                />
                <span className="photo-zoom" aria-hidden="true">
                  <ZoomIn size={16} />
                </span>
              </button>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {entry.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>
      <p className="album-note handwritten">{album.note}</p>
      <dialog
        className="photo-dialog"
        ref={dialog}
        aria-label={album.label}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {active && (
          <div className="lightbox-content">
            <div className="lightbox-toolbar">
              <span>{album.label}</span>
              <Button
                variant="ghost"
                size="icon"
                className="lightbox-close"
                onClick={close}
                aria-label="Chiudi foto"
              >
                <X size={21} />
              </Button>
            </div>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="95vw"
              className="lightbox-image"
            />
            <div className="lightbox-caption">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Foto precedente"
                disabled={selected === 0}
                onClick={() => move(-1)}
              >
                <ArrowLeft size={19} />
              </Button>
              <div>
                <p>{active.caption}</p>
                <span>
                  {(selected ?? 0) + 1} / {album.photos.length}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Foto successiva"
                disabled={selected === album.photos.length - 1}
                onClick={() => move(1)}
              >
                <ArrowRight size={19} />
              </Button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
