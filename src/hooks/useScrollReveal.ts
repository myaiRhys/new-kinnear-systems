"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const triggers: ScrollTrigger[] = [];

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 30 });

      const trigger = ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });

      triggers.push(trigger);
    });

    // Staggered reveal for grouped elements
    const groups = document.querySelectorAll("[data-reveal-group]");
    groups.forEach((group) => {
      const children = group.querySelectorAll("[data-reveal-child]");
      gsap.set(children, { opacity: 0, y: 30 });

      const trigger = ScrollTrigger.create({
        trigger: group,
        start: "top 80%",
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.12,
          });
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
}
