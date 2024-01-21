import { Inter } from "next/font/google";
import MotionBlur from "@/components/MotionBlur/MotionBlur";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex items-center justify-center h-screen bg-black ${inter.className}`}
    >
      <div className="w-max">
        <MotionBlur />
      </div>
    </main>
  );
}
