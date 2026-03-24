import Nav      from "@/components/Nav";
import Hero     from "@/components/Hero";
import Services from "@/components/Services";
import Work     from "@/components/Work";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
