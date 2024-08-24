import { ImageProps } from "next/image";

export interface WheelData {
    option?: string;
    image?: ImageProps;
    optionSize?: number; // Optional
    style?: StyleType;
  }
  
export interface SpinWheelProps {
    data: WheelData[];
  }