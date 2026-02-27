import Nav from "@/components/nav";
import Hero from "@/components/hero";
import WhatIsFootzoning from "@/components/what-is-footzoning";
import Experience from "@/components/experience";
import Ticker from "@/components/ticker";
import Services from "@/components/services";
import About from "@/components/about";
import Booking from "@/components/booking";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhatIsFootzoning />
      <Experience />
      <Ticker />
      <Services />
      <About />
      <Booking />
      <Footer />
    </main>
  );
}
