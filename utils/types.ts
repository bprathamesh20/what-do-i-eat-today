import { ImageProps } from "next/image";
import { StyleType } from "react-custom-roulette/dist/components/Wheel/types";

export interface WheelData {
    option?: string;
    image?: ImageProps;
    optionSize?: number; // Optional
    style?: StyleType;
  }
  
export interface SpinWheelProps {
    data: WheelData[];
  }