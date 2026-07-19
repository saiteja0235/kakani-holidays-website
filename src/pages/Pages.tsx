import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  UserRound,
} from "lucide-react";
import { contact, destinations, packages } from "../data/content";
import { premiumBlogs as blogs } from "../data/blogCatalog";
import {
  PackageCard,
  PageHero,
  SectionTitle,
  SmartImage,
} from "../components/Common";
import { TripForm } from "./TripForm";
const fallback = destinations[0].image;
export function About() {
  return (
    <>
      <PageHero
        kicker="About Kakani Holidays"
        title="Travel is more than a place. It’s a feeling you bring home."
        copy="Personalised domestic and international journeys, built with care from first idea to final return."
        image={destinations[3].image}
      />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <SectionTitle
            kicker="Host of Happiness"
            title="A more personal way to see the world"
          />
          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Kakani Holidays Pvt. Ltd. is a travel and tourism company
              dedicated to domestic and international holiday experiences. We
              design customised tour packages that bring together comfort, value
              and memorable experiences.
            </p>
            <p>
              Our complete travel solutions include group tours, honeymoon
              trips, family vacations, corporate travel, hotel bookings, flight
              assistance and guided sightseeing services.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-x">
          <SectionTitle kicker="Our approach" title="Care at every stage" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Our mission",
                "To create seamless, enjoyable journeys shaped around each traveller.",
              ],
              [
                "Our vision",
                "To make thoughtful travel planning feel reassuring, transparent and personal.",
              ],
              [
                "Our promise",
                "Carefully curated itineraries and dependable support from start to finish.",
              ],
            ].map((x) => (
              <div className="rounded-3xl bg-ivory p-8" key={x[0]}>
                <h3 className="text-3xl">{x[0]}</h3>
                <p className="mt-4 leading-7 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Packages({ kind }: { kind?: "Domestic" | "International" }) {
  const [q, setQ] = useState(""),
    [cat, setCat] = useState("All");
  const list = useMemo(
    () =>
      packages.filter(
        (p) =>
          (!kind || p.kind === kind) &&
          (cat === "All" || p.kind === cat || p.categories.includes(cat)) &&
          (p.title + p.destination).toLowerCase().includes(q.toLowerCase()),
      ),
    [q, cat, kind],
  );
  return (
    <>
      <PageHero
        kicker="Curated holidays"
        title={kind ? `${kind} Packages` : "Find the journey that fits you"}
        copy="Browse real itineraries and speak with our experts to personalise every detail."
        image={
          kind === "Domestic" ? destinations[4].image : destinations[1].image
        }
      />
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-soft md:flex-row">
            <label className="flex flex-1 items-center gap-2 rounded-xl bg-ivory px-4">
              <Search size={18} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-transparent py-3 outline-none"
                placeholder="Search packages or destinations"
              />
            </label>
            <div className="flex gap-2 overflow-auto">
              {[
                "All",
                "Domestic",
                "International",
                "Family",
                "Honeymoon",
                "Pilgrimage",
              ].map((x) => (
                <button
                  key={x}
                  onClick={() => setCat(x)}
                  className={`whitespace-nowrap rounded-xl px-4 py-3 text-xs font-bold ${cat === x ? "bg-navy text-white" : "bg-ivory"}`}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            {list.length} holidays found
          </p>
          {list.length ? (
            <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl bg-white p-16 text-center">
              <h3 className="text-3xl">No journeys match yet</h3>
              <p className="mt-3 text-slate-500">
                Try another search, or let us create a custom itinerary.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export function Destination() {
  const { slug } = useParams();
  const d = destinations.find((x) => x.slug === slug) || destinations[0];
  const related = packages.filter((p) =>
    p.destination.toLowerCase().includes(d.name.toLowerCase().split(" ")[0]),
  );
  return (
    <>
      <PageHero
        kicker={d.region}
        title={d.name}
        copy={d.description}
        image={d.image}
      />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionTitle kicker="Discover" title={`Why ${d.name}?`} />
            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
              {d.description} Kakani Holidays can tailor the pace, stays,
              sightseeing and transfers around your preferences. Specific
              weather, visa and entry guidance is confirmed by our travel team
              for your intended dates.
            </p>
            <h2 className="mt-14 text-4xl">Available packages</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.length ? (
                related.map((p) => <PackageCard key={p.slug} pkg={p} />)
              ) : (
                <div className="rounded-3xl bg-white p-8">
                  <h3 className="text-2xl">Custom {d.name} itinerary</h3>
                  <p className="mt-3 text-slate-500">
                    Speak with our travel expert for current options and
                    complete details.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="sticky top-28 rounded-3xl bg-navy p-7 text-white">
              <h3 className="text-3xl">Plan {d.name} with us</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Tell us your preferred dates and travel style. We’ll share
                suitable options.
              </p>
              <Link
                className="btn btn-primary mt-6 w-full"
                to="/customised-tours"
              >
                Start planning
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
export function PackageDetail() {
  const { slug } = useParams();
  const p = packages.find((x) => x.slug === slug) || packages[0];
  const [travellers, setTravellers] = useState("2"),
    [date, setDate] = useState("");
  const msg = `Hello Kakani Holidays! 👋 I am interested in the ${p.title} package for ${travellers} travellers. My preferred travel date is ${date || "to be confirmed"}. Please share pricing, availability and complete details.`;
  return (
    <>
      <PageHero
        kicker={`${p.kind} · ${p.duration}`}
        title={p.title}
        copy={p.summary}
        image={p.image}
      />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_.7fr]">
          <article>
            <div className="flex flex-wrap gap-5 text-sm">
              <span className="flex gap-2">
                <Clock size={18} />
                {p.duration}
              </span>
              <span className="flex gap-2">
                <MapPin size={18} />
                {p.places.join(" · ")}
              </span>
            </div>
            <h2 className="mt-12 text-4xl">Tour overview</h2>
            <p className="mt-5 leading-8 text-slate-600">
              {p.summary} This itinerary is customisable. Exact hotel,
              transport, day-by-day schedule, pricing, inclusions and
              cancellation terms are shared by the Kakani Holidays team based on
              your travel dates.
            </p>
            <h2 className="mt-12 text-4xl">Available highlights</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {p.inclusions.map((x) => (
                <div className="flex gap-3 rounded-xl bg-white p-4" key={x}>
                  <Check className="text-teal" size={18} />
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-sand bg-sand/30 p-7">
              <h3 className="text-2xl">Details available on request</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Day-wise itinerary, hotels, exclusions, important notes and
                current policies will be confirmed in your personalised
                proposal.
              </p>
            </div>
          </article>
          <aside>
            <div className="sticky top-28 rounded-3xl bg-white p-7 shadow-soft">
              <p className="eyebrow">Enquire now</p>
              <h3 className="mt-2 text-3xl">Contact for pricing</h3>
              <label className="mt-6 block text-xs font-bold">
                TRAVELLERS
                <input
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                  className="mt-2 w-full rounded-xl bg-ivory p-3"
                />
              </label>
              <label className="mt-4 block text-xs font-bold">
                TRAVEL DATE
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2 w-full rounded-xl bg-ivory p-3"
                />
              </label>
              <a
                href={`https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(msg)}`}
                target="_blank"
                className="btn btn-primary mt-5 w-full"
              >
                WhatsApp enquiry
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="btn mt-2 w-full border"
              >
                <Phone size={16} /> Call now
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
export function Gallery() {
  const all = [...destinations, ...packages].map((x, i) => ({
    src: x.image,
    name: "name" in x ? x.name : x.title,
    label: x.imageLabel,
    size: x.recommendedSize,
    tall: i % 3 === 0,
  }));
  return (
    <>
      <PageHero
        kicker="Travel memories"
        title="Moments that stay with you"
        image={destinations[6].image}
      />
      <section className="section">
        <div className="container-x columns-1 gap-5 sm:columns-2 lg:columns-3">
          {all.map((x, i) => (
            <figure
              key={i}
              className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl ${x.tall ? "h-[480px]" : "h-[300px]"}`}
            >
              <SmartImage
                src={x.src}
                alt={x.name}
                label={x.label}
                recommendedSize={x.size}
                className="card-image h-full w-full object-cover"
                placeholderClassName="h-full rounded-none"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 p-5 pt-16 text-white">
                {x.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
export function Blogs() {
  return (
    <>
      <PageHero
        kicker="Travel journal"
        title="Ideas, guides & inspiration"
        image={blogs[0].image}
      />
      <section className="section">
        <div className="container-x grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <Link
              to={`/blogs/${b.slug}`}
              className="group rounded-3xl bg-white p-3 shadow-soft"
              key={b.slug}
            >
              <div className="h-60 overflow-hidden rounded-2xl">
                <SmartImage
                  src={b.image}
                  alt={b.title}
                  label={b.imageLabel}
                  recommendedSize={b.recommendedSize}
                  className="card-image h-full w-full object-cover"
                  placeholderClassName="h-full rounded-none"
                />
              </div>
              <div className="p-4">
                <p className="eyebrow">{b.category}</p>
                <h2 className="mt-2 text-3xl">{b.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {b.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
export function BlogDetail() {
  const { slug } = useParams();
  const b = blogs.find((x) => x.slug === slug) || blogs[0];
  const related = blogs.filter((post) => post.slug !== b.slug).slice(0, 5);
  return (
    <div className="blog-detail-premium overflow-hidden bg-[#f3f6fa]">
      <section className="relative flex min-h-[610px] items-end overflow-hidden bg-navy pb-16 text-white"><motion.img key={b.image} initial={{opacity:0,scale:1.12}} animate={{opacity:.72,scale:1}} transition={{duration:1.4,ease:[.22,1,.36,1]}} src={b.image} alt={b.imageLabel} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#041528] via-[#041528]/48 to-[#041528]/20"/><div className="absolute inset-0 bg-gradient-to-r from-[#041528]/75 via-transparent to-transparent"/><div className="lux-container relative"><motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.8}} className="max-w-5xl"><span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[.18em] text-[#ffc45c] backdrop-blur-xl">{b.category}</span><h1 className="mt-5 font-serif text-5xl leading-[1] md:text-7xl">{b.title}</h1><div className="mt-7 flex flex-wrap gap-5 text-xs text-white/70"><span className="flex items-center gap-2"><CalendarDays size={15} className="text-[#e7b753]"/>{b.date}</span><span className="flex items-center gap-2"><UserRound size={15} className="text-[#e7b753]"/>Kakani Holidays</span><span className="flex items-center gap-2"><BookOpen size={15} className="text-[#e7b753]"/>6 minute read</span></div></motion.div></div></section>
      <section className="relative py-16"><div className="lux-container grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-start">
        <motion.article initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-[32px] border border-white/90 bg-white/80 p-6 shadow-[0_24px_70px_rgba(6,27,51,.09)] backdrop-blur-xl md:p-10"><p className="border-l-4 border-[#e7b753] pl-5 font-serif text-2xl leading-10 text-navy">{b.excerpt}</p><div className="mt-9 space-y-9 text-base leading-8 text-slate-600"><section><h2 className="mb-3 font-serif text-3xl text-navy">Why this journey belongs on your list</h2><p>{b.content[0]}</p></section><section><h2 className="mb-3 font-serif text-3xl text-navy">Experiences worth making time for</h2><p>{b.content[1]}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Signature landmarks","Authentic local culture","Comfortable pacing","Handpicked stays"].map((item)=><div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f4f7f8] p-4 text-sm font-bold text-navy"><span className="grid h-8 w-8 place-items-center rounded-full bg-teal/15 text-teal"><Sparkles size={14}/></span>{item}</div>)}</div></section><section><h2 className="mb-3 font-serif text-3xl text-navy">How to plan it beautifully</h2><p>{b.content[2]}</p></section></div><div className="mt-10 overflow-hidden rounded-[26px] border border-[#e7b753]/25 bg-gradient-to-br from-[#fff8e8] to-[#eff9f7] p-7"><span className="text-[10px] font-black uppercase tracking-[.2em] text-ocean">Kakani pro tip</span><h2 className="mt-3 font-serif text-3xl text-navy">Leave space for the unexpected.</h2><p className="mt-3 text-sm leading-7 text-slate-600">The most memorable holidays balance must-see highlights with breathing room. Our specialists can shape this guide into a personalised route around your dates and interests.</p><Link to="/customised-tours" className="lux-btn-gold mt-6">Plan this journey <ArrowRight size={15}/></Link></div></motion.article>
        <aside className="space-y-6 lg:sticky lg:top-28"><div className="rounded-[30px] border border-white bg-white/80 p-6 shadow-[0_20px_60px_rgba(6,27,51,.08)] backdrop-blur-xl"><p className="lux-eyebrow">Related articles</p><div className="mt-5 divide-y divide-slate-100">{related.map((post)=><Link key={post.slug} to={`/blogs/${post.slug}`} className="group flex gap-3 py-4"><img src={post.image} alt={post.imageLabel} loading="lazy" className="h-20 w-24 shrink-0 rounded-xl object-cover transition duration-500 group-hover:scale-105"/><div><h3 className="line-clamp-2 text-xs font-extrabold leading-5 text-navy group-hover:text-ocean">{post.title}</h3><p className="mt-1 text-[10px] text-slate-400">{post.date}</p></div></Link>)}</div></div><div className="relative overflow-hidden rounded-[30px] bg-navy p-7 text-white shadow-[0_24px_70px_rgba(6,27,51,.22)]"><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal/25 blur-2xl"/><div className="relative"><p className="text-[9px] font-black uppercase tracking-[.2em] text-[#e7b753]">Travel made personal</p><h2 className="mt-3 font-serif text-4xl">Plan your dream trip.</h2><p className="mt-4 text-sm leading-7 text-white/60">Tell us what inspires you. We’ll take care of the route, stays and thoughtful details.</p><Link to="/contact" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black text-navy">Speak to an expert <ArrowRight size={15}/></Link></div></div></aside>
      </div></section>
    </div>
  );
}
export function Contact() {
  return (
    <>
      <PageHero
        kicker="Speak with us"
        title="Let’s shape your next holiday"
        image={destinations[7].image}
      />
      <section className="relative overflow-hidden bg-[#071d33] py-20 text-white">
        <span className="absolute -right-40 -top-40 h-96 w-96 rounded-full border-[70px] border-white/[.025]" />
        <div className="container-x relative">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow !text-[#e7b753]">
              Talk to a real travel expert
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
              Your journey starts with a conversation.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/55">
              Share a destination, a date, or simply a feeling. We will shape
              the flights, stays, pace and details around you.
            </p>
          </div>
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr]">
            <div className="grid content-start gap-4">
              {([
                [Phone, "Call us", contact.phone, `tel:${contact.phoneRaw}`],
                [Mail, "Write to us", contact.email, `mailto:${contact.email}`],
                [
                  Globe2,
                  "Journey desk",
                  "Domestic · International · Devotional",
                  "/packages",
                ],
              ] as [typeof Phone, string, string, string][]).map(([Icon, label, value, href]) => (
                <a
                  href={href as string}
                  key={label as string}
                  className="group flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[.06] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[.1]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e7b753] text-navy">
                    <Icon size={20} />
                  </span>
                  <span>
                    <small className="block text-[9px] font-black uppercase tracking-[.18em] text-white/40">
                      {label}
                    </small>
                    <strong className="mt-1 block text-sm sm:text-base">
                      {value}
                    </strong>
                  </span>
                </a>
              ))}
              <a
                href={`https://wa.me/${contact.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-xs font-black"
              >
                <MessageCircle size={17} /> Start WhatsApp conversation
              </a>
            </div>
            <div className="rounded-[34px] bg-white p-3 text-navy shadow-[0_30px_90px_rgba(0,0,0,.28)] sm:p-6">
              <div className="rounded-[28px] bg-[linear-gradient(145deg,#f8faf9,#edf5f3)] p-2 sm:p-4">
                <TripForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
export function CustomTours() {
  return (
    <>
      <PageHero
        kicker="Made for you"
        title="Your idea. Your pace. Your journey."
        copy="Tell us what you’re imagining and our travel team will turn it into a thoughtful plan."
        image={destinations[1].image}
      />
      <section className="section">
        <div className="container-x">
          <TripForm />
        </div>
      </section>
    </>
  );
}
export function GroupTours() {
  return (
    <>
      <PageHero
        kicker="Together is better"
        title="Group journeys, seamlessly managed"
        copy="Coordinated transport, stays, sightseeing and support for shared experiences."
        image={destinations[2].image}
      />
      <section className="section">
        <div className="container-x">
          <SectionTitle
            kicker="Group departures"
            title="Designed to bring people together"
            copy="Speak to our team for current group departures and availability. Dates and prices are confirmed on enquiry."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages
              .filter(
                (x) =>
                  x.categories.includes("Group Tours") ||
                  x.kind === "International",
              )
              .slice(0, 3)
              .map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function Legal({ terms = false }: { terms?: boolean }) {
  return (
    <>
      <PageHero
        kicker="Kakani Holidays"
        title={terms ? "Terms & Conditions" : "Privacy Policy"}
        image={fallback}
      />
      <article className="container-x max-w-3xl py-20">
        <h2 className="text-3xl">Information notice</h2>
        <p className="mt-5 leading-8 text-slate-600">
          This page is a launch-ready placeholder pending review of Kakani
          Holidays’ current legal wording. It must be replaced with approved{" "}
          {terms
            ? "booking, cancellation and website terms"
            : "privacy, data retention and form handling policies"}{" "}
          before collecting production enquiries.
        </p>
        <p className="mt-5 leading-8 text-slate-600">
          For questions, contact {contact.email}.
        </p>
      </article>
    </>
  );
}
export function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-navy px-4 text-center text-white">
      <div>
        <p className="eyebrow !text-teal">404 · Off the map</p>
        <h1 className="mt-4 text-7xl">This journey isn’t here.</h1>
        <Link to="/" className="btn btn-primary mt-8">
          Return home
        </Link>
      </div>
    </div>
  );
}
function FAQ() {
  const qs = [
    "Do you offer customised packages?",
    "Can I book flights, hotels and tours separately?",
    "Do you provide visa assistance?",
  ];
  return (
    <section className="section bg-white">
      <div className="container-x max-w-3xl">
        <SectionTitle
          kicker="Good to know"
          title="Frequently Asked Questions"
        />
        <div className="mt-8">
          {qs.map((q, i) => (
            <details className="border-b py-5" key={q}>
              <summary className="flex cursor-pointer list-none justify-between font-bold">
                {q}
                <ChevronDown size={18} />
              </summary>
              <p className="mt-4 leading-7 text-slate-500">
                {i === 0
                  ? "Yes. Kakani Holidays specialises in personalised domestic and international itineraries."
                  : i === 1
                    ? "Yes. Individual travel services can be arranged based on your requirements."
                    : "Yes. Documentation support is available; exact requirements are confirmed for your destination and dates."}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTA() {
  return (
    <section className="bg-sunset py-16 text-white">
      <div className="container-x text-center">
        <h2 className="text-5xl">
          A beautiful journey begins with a conversation.
        </h2>
        <Link className="btn btn-light mt-7" to="/customised-tours">
          Plan my trip
        </Link>
      </div>
    </section>
  );
}
