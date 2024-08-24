import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="mt-12">
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24 bg-white text-black">
      <p className="mb-6 sm:mb-8 md:mb-12 text-lg sm:text-xl text-center">How would you choose?</p>
      <a
        href="/spin-wheel"
        className="bg-red-400 font-black tracking-wider text-2xl text-white p-4 sm:p-8 md:p-12 rounded-lg text-center mb-6 sm:mb-8 md:mb-12 w-full max-w-xs sm:max-w-sm md:max-w-md hover:scale-105 transition transform duration-300 min-h-24 flex justify-center items-center"
      >
        🎰 SPIN THE WHEEL
      </a>
      <a
        href="/food-for-mood"
        className="bg-red-400 font-black tracking-wider text-2xl text-white p-4 sm:p-8 md:p-12 rounded-lg text-center w-full max-w-xs sm:max-w-sm md:max-w-md hover:scale-105 transition transform duration-300 min-h-24 flex justify-center items-center "
      >
        ✨ FOOD FOR MOOD
      </a>
    </main>
  </div>
  );
}
