
import {Navbar} from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-articles";
import { BlogFooter } from "@/components/home/footer";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <TopArticles/>
    <BlogFooter/>
   </div>
  );
}
