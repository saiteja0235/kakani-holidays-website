import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
} from "lucide-react";
import type { Package } from "../types";
import { contact } from "../data/content";
export function ImagePlaceholder({
  label,
  recommendedSize,
  className = "",
}: {
  label: string;
  recommendedSize?: string;
  className?: string;
}) {
  return (
    <div
      className={`image-placeholder relative flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden border border-dashed border-slate-300 bg-slate-100 ${className}`}
      role="img"
      aria-label={`${label}${recommendedSize ? `, recommended ${recommendedSize}` : ""}`}
    >
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
          <ImageIcon className="h-6 w-6 text-slate-500" aria-hidden="true" />
        </div>
        <div>
          <p className="font-medium text-slate-700">{label}</p>
          {recommendedSize && (
            <p className="mt-1 text-sm text-slate-500">
              Recommended: {recommendedSize}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export function ResponsiveTravelImage({
  src,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const mobile = src.includes("/mobile/")
    ? null
    : src.startsWith("/images/catalog/")
      ? src.replace("/images/catalog/", "/images/catalog/mobile/")
      : src.startsWith("/images/gallery/")
        ? src.replace("/images/gallery/", "/images/gallery/mobile/")
        : src.startsWith("/images/destinations/")
          ? src.replace("/images/destinations/", "/images/destinations/mobile/")
          : null;
  return (
    <picture className="contents">
      {mobile && <source media="(max-width: 767px)" srcSet={mobile} />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`travel-motion-image ${className}`}
      />
    </picture>
  );
}
export function SmartImage({
  src,
  alt,
  label,
  recommendedSize,
  className = "",
  placeholderClassName = "",
}: {
  src?: string;
  alt: string;
  label: string;
  recommendedSize?: string;
  className?: string;
  placeholderClassName?: string;
}) {
  return src ? (
    <ResponsiveTravelImage src={src} alt={alt} className={className} />
  ) : (
    <ImagePlaceholder
      label={label}
      recommendedSize={recommendedSize}
      className={placeholderClassName}
    />
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
export function SectionTitle({
  kicker,
  title,
  copy,
  light = false,
}: {
  kicker: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className={`eyebrow ${light ? "!text-teal" : ""}`}>{kicker}</p>
      <h2
        className={`mt-3 text-4xl leading-tight md:text-6xl ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-5 leading-8 ${light ? "text-white/65" : "text-slate-600"}`}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}
export function PackageCard({ pkg }: { pkg: Package }) {
  const wa = `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(`Hello Kakani Holidays, I would like details about ${pkg.title}.`)}`;
  return (
    <motion.article
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-soft"
    >
      <div className="relative h-60 overflow-hidden">
        <SmartImage
          src={pkg.image}
          alt={pkg.destination}
          label={pkg.imageLabel}
          recommendedSize={pkg.recommendedSize}
          className="card-image h-full w-full object-cover"
          placeholderClassName="rounded-none !min-h-0"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
          {pkg.kind}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex gap-1">
            <Clock size={14} />
            {pkg.duration}
          </span>
          <span className="flex gap-1">
            <MapPin size={14} />
            {pkg.destination}
          </span>
        </div>
        <h3 className="mt-4 text-2xl">{pkg.title}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-ocean">
          {pkg.places.join(" · ")}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-500">{pkg.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2 border-t pt-5">
          <Link
            to={`/package/${pkg.slug}`}
            className="btn !px-4 !py-2 bg-navy text-white"
          >
            View details <ArrowRight size={15} />
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="btn !px-4 !py-2 border border-slate-200"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}
export function PageHero({
  kicker,
  title,
  copy,
  image,
}: {
  kicker: string;
  title: string;
  copy?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-navy pb-16 pt-36 text-white">
      <div className="absolute inset-0 opacity-55">
        <SmartImage
          src={image}
          alt=""
          label={`${title} Hero Image`}
          recommendedSize="1920 × 1080 px"
          placeholderClassName="h-full rounded-none border-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/65 to-transparent" />
      <div className="container-x relative">
        <p className="eyebrow !text-teal">{kicker}</p>
        <h1 className="mt-3 max-w-4xl text-5xl leading-[1.02] md:text-7xl">
          {title}
        </h1>
        {copy && (
          <p className="mt-5 max-w-xl text-white/70 leading-7">{copy}</p>
        )}
      </div>
    </section>
  );
}
