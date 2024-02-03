import { Inter } from "next/font/google";
import CardAnimation from "@/components/CardAnimation/CardAnimation";
import YourComponent from "@/components/100Days/Day2";
import PyramidAnimation from "@/components/PyramidAnimation/PyramidAnimation";
import Carousel from "@/components/Slider/Carousel";
import WavingAnimation from "@/components/FormWave/FormWave";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import RockPaperScissors from "@/components/RockPaperScissors/RockPaperScissors";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex items-center justify-center h-screen bg-white ${inter.className}`}
    >
      <div className="w-max">
        {/* <CardAnimation /> */}
        {/* <YourComponent /> */}
        {/* <PyramidAnimation /> */}
        {/* <Carousel /> */}
        {/* <ProfileCard /> */}
        <RockPaperScissors />
        {/* <WavingAnimation /> */}
      </div>
    </main>
  );
}
