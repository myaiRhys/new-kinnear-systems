import Nav         from "@/components/Nav";
import Hero        from "@/components/Hero";
import About       from "@/components/About";
import Services    from "@/components/Services";
import Work        from "@/components/Work";
import Testimonial from "@/components/Testimonial";
import FAQ         from "@/components/FAQ";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
