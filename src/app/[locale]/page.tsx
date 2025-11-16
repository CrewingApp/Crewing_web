"use client";

import { useRef } from "react";
import Main from "@/components/main";
import Features from "@/components/features";
import Download from "@/components/download";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    if (scrollContainerRef.current) {
      const sectionHeight = window.innerHeight;

      scrollContainerRef.current.scrollBy({
        top: sectionHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory"
      }}
    >
      <div
        style={{
          minHeight: "100%",
          background:
            "linear-gradient(180deg, #e6f3f4 9.84%, #013236 31.15%, #013236 57.39%, #c6ced9 81.98%)"
        }}
      >
        <div style={{ scrollSnapAlign: "start" }}>
          <Main onScrollDown={scrollToFeatures} />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <Features />
        </div>
        <div style={{ scrollSnapAlign: "start" }}>
          <Download />
        </div>
      </div>
    </div>
  );
}
