"use client";
import { useEffect, useState } from "react";

export function useSectionSpy(sectionIds: string[], rootMargin = "-40% 0px -50% 0px") {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}


