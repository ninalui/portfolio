import React, { useRef, useEffect, useState } from "react";

export default function FadeIn({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in-section${isVisible ? " is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}