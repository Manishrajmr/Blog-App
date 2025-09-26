
import {Navbar} from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>

    <TopArticles/>
   </div>
  );
}
