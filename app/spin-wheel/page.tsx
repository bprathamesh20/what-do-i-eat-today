import SpinWheel from "@/components/spinwheel";
import Header from "@/components/header";
import { WheelData } from "@/utils/types";
export default function SpinWheelPage() {
    const wheelData: WheelData[] = [
            { option: 'Pizza' },
            { option: 'Burger' },
            { option: 'Sushi' },
            { option: 'Pasta' },
            { option: 'Tacos' },
            { option: 'Salad' },
      ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-2 p-24 bg-white text-black ">
    <Header/>
    <SpinWheel data={wheelData} />
    </main>
  );
}
 