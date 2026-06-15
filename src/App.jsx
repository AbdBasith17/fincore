import { useEffect } from "react";
import "./styles/globals.css";

import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Ticker   from "./components/Ticker";
import About    from "./components/About";
import Services from "./components/Services";
import Whyus    from "./components/Whyus";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

/* ── Global scroll-reveal observer ── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}

