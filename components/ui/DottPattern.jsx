import React from "react";

const DottPattern = () => {
  return (
    <div>
      <svg
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] -z-10"
      >
        <defs>
          <pattern
            id=":r8g:"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <circle
              fill="white"
              id="pattern-circle"
              cx="1"
              cy="1"
              r="1"
            ></circle>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#:r8g:)"
        ></rect>
      </svg>
    </div>
  );
};

export default DottPattern;
