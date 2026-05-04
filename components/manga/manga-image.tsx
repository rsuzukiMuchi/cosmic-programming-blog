import Image from "next/image";

type MangaImageProps = {
  alt: string;
  caption?: string;
  priority?: boolean;
  src: string;
};

export function MangaImage({ alt, caption, priority = false, src }: MangaImageProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-white/15 bg-slate-950 shadow-glow">
      <Image
        alt={alt}
        className="h-auto w-full"
        height={630}
        priority={priority}
        sizes="(min-width: 1024px) 896px, calc(100vw - 40px)"
        src={src}
        width={1200}
      />
      {caption ? (
        <figcaption className="border-t border-white/10 px-4 py-3 text-sm leading-6 text-slate-400">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
