"use client";
import { useLottie } from "lottie-react";

export default function LottieAnimation({ item, className = "" }) {
  const defaultOptions = {
    animationData: item,
    loop: true,
  };
  const { View } = useLottie(defaultOptions);

  return (
    <div className={className} aria-hidden="true">
      {View}
    </div>
  );
}
