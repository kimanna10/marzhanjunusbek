"use client";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div
      className={[
        "fixed right-4 bottom-6 z-50",
        "transition-opacity",
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
        reduceMotion ? "transition-none" : "",
      ].join(" ")}
    >
      <Button
        variant="icon"
        href="#top"
        onClick={handleClick}
        aria-label="Вернуться наверх"
        className="w-12 h-12 shadow-lg backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        icon={<IoChevronUp aria-hidden="true" />}
      />
    </div>
  );
}
