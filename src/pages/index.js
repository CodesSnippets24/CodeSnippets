import { Inter } from "next/font/google";
import CardAnimation from "@/components/CardAnimation/CardAnimation";
import YourComponent from "@/components/100Days/Day2";
import PyramidAnimation from "@/components/PyramidAnimation/PyramidAnimation";
import Carousel from "@/components/Slider/Carousel";
import WavingAnimation from "@/components/FormWave/FormWave";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import RockPaperScissors from "@/components/RockPaperScissors/RockPaperScissors";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import GlowingButton from "@/components/GlowingButton/GlowingButton";
import ShineButton from "@/components/ShineButton/ShineButton";
import BlobAnimation from "@/components/BlobAnimation/BlobAnimation";
import LiquidLoader from "@/components/Chocolate/LiqiudLoader";
import GlowButton1 from "@/components/GlowingButton/GlowButton1";
import Transform from "@/components/Transform/Transform";
import TypewriterComponent from "@/components/TypeWriteranimation/TypeWriterAnimation";
import RandomColor from "@/components/RandomColor/RandomColor";
import CalmFunction from "@/components/CalmpFunction/CalmFunction";
import TextGlowing from "@/components/GlowingBorder/GlowingBorder";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex items-center justify-center h-screen ${inter.className}`}
    >
      <div className="w-max">
        {/* <CardAnimation /> */}
        {/* <YourComponent /> */}
        {/* <PyramidAnimation /> */}
        {/* <Carousel /> */}
        {/* <ProfileCard /> */}
        {/* <RockPaperScissors /> */}
        {/* <WavingAnimation /> */}
        {/* <ProductSlider /> */}
        {/* <GlowingButton /> */}
        {/* <ShineButton /> */}
        {/* <BlobAnimation /> */}
        {/* <LiquidLoader /> */}
        {/* <GlowButton1 /> */}
        {/* <Transform /> */}
        {/* <TypewriterComponent /> */}
        {/* <RandomColor /> */}
        {/* <CalmFunction /> */}
        <GlowingButton />
      </div>
    </main>
  );
}
