import SpinWheel from "@/components/spinwheel";
import Header from "@/components/header";
import { WheelData } from "@/utils/types";
export default function SpinWheelPage() {
    const wheelData: WheelData[] = [
            { option: 'Pizza', style: { backgroundColor: '#F56565', textColor: "white" }  },
            { option: 'Burger' },
            { option: 'Roll',style: { backgroundColor: '#F56565', textColor: "white" }  },
            { option: 'Pasta' },
            { option: 'Tacos', style: { backgroundColor: '#F56565', textColor: "white" }  },
            { option: 'Salad' },
            { option: 'Indian', style: { backgroundColor: '#F56565', textColor: "white" }  },
            { option: 'Chinese' },
      ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-2 p-24 bg-white text-black ">
    <Header/>
    <SpinWheel data={wheelData} />
    </main>
  );
}
 