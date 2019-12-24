import React from "react";

const SoftGlow = () => {
  return (
    <>
      <filter
        id="soft-glow-blue"
        height="300%"
        width="300%"
        x="-75%"
        y="-75%"
        filterUnits="userSpaceOnUse"
      >
        <feMorphology
          operator="dilate"
          radius="2"
          in="SourceAlpha"
          result="thicken"
        />
        <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
        <feFlood floodColor="rgb(0, 220,255)" result="glowColor" />
        <feComposite
          in="glowColor"
          in2="blurred"
          operator="in"
          result="softGlow_colored"
        />
        <feMerge>
          <feMergeNode in="softGlow_colored" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter
        id="soft-glow-yellow"
        height="300%"
        width="300%"
        x="-75%"
        y="-75%"
        filterUnits="userSpaceOnUse"
      >
        <feMorphology
          operator="dilate"
          radius="2"
          in="SourceAlpha"
          result="thicken"
        />
        <feGaussianBlur in="thicken" stdDeviation="5" result="blurred" />
        <feFlood floodColor="rgb(255,255,0)" result="glowColor" />
        <feComposite
          in="glowColor"
          in2="blurred"
          operator="in"
          result="softGlow_colored"
        />
        <feMerge>
          <feMergeNode in="softGlow_colored" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </>
  );
};

export default SoftGlow;
