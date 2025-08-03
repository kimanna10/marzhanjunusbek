import animationData from "@/animations/drawkit-grape-animation-1-LOOP.json"; // путь к файлу
import Lottie from "lottie-react";

export default function LottieAnimation({ loop = true, className = "" }) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={true}
      className={className}
    />
  );
}
