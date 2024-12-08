
import BottomSection from "@/components/bottomSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ReviewList from "@/components/reiviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Hero />
     <BottomSection />
     <ReviewList />
     <Footer />
    </>
  )
}
