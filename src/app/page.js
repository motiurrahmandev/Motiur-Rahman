import Image from "next/image";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMerquee";
import SelectedWork from "./components/SelectedWork";
import Process from "./components/Process";
import Services from "./components/Servicess";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <TechMarquee/>
    <SelectedWork/>
    <Process/>
    <Services/>
    <Testimonials/>
    
    </>
  );
}
