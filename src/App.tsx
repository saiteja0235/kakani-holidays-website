import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const PackagesPage = lazy(() => import("./pages/Packages"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blogs = lazy(() => import("./pages/Blogs"));
const DestinationPage = lazy(() => import("./pages/DestinationPage"));
const page = <T extends keyof typeof import("./pages/Pages")>(name: T) =>
  lazy(() => import("./pages/Pages").then((module) => ({ default: module[name] as React.ComponentType<any> })));
const BlogDetail = page("BlogDetail");
const Contact = page("Contact");
const CustomTours = page("CustomTours");
const Destination = page("Destination");
const GroupTours = page("GroupTours");
const Legal = page("Legal");
const NotFound = page("NotFound");
const PackageDetail = page("PackageDetail");

function PageLoader() {
  return <div className="grid min-h-screen place-items-center bg-[#061b33] text-white"><span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-[#e7b753]" /></div>;
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/domestic" element={<PackagesPage kind="Domestic" />} />
          <Route path="/packages/international" element={<PackagesPage kind="International" />} />
          <Route path="/packages/devotional" element={<PackagesPage kind="Devotional" />} />
          <Route path="/packages/:category/:destinationSlug" element={<DestinationPage />} />
          <Route path="/destinations/:slug" element={<Destination />} />
          <Route path="/package/:slug" element={<PackageDetail />} />
          <Route path="/customised-tours" element={<CustomTours />} />
          <Route path="/group-tours" element={<GroupTours />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
