import { Inter } from "next/font/google";
import CardAnimation from "@/components/CardAnimation/CardAnimation";
import YourComponent from "@/components/100Days/Day2";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex items-center justify-center h-screen bg-black ${inter.className}`}
    >
      <div className="w-max">
        {/* <CardAnimation /> */}
        <YourComponent />
      </div>
    </main>
  );
}
