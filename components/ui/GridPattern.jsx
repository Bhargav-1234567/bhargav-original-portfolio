import React from "react";

const GridPattern = () => {
  return (
    <div>
      <svg
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 w-full fill-gray-400/30 stroke-gray-400/30 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] -z-10"
        height={"100vh"}
      >
        <defs>
          <pattern
            id=":r36:"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 40V.5H40" fill="none" stroke-dasharray="0"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#:r36:)"
        ></rect>
        <svg x="-1" y="-1" class="overflow-visible">
          <rect stroke-width="0" width="39" height="39" x="161" y="161"></rect>
          <rect stroke-width="0" width="39" height="39" x="201" y="41"></rect>
          <rect stroke-width="0" width="39" height="39" x="321" y="81"></rect>
          <rect stroke-width="0" width="39" height="39" x="241" y="241"></rect>
          <rect stroke-width="0" width="39" height="39" x="401" y="201"></rect>
          <rect stroke-width="0" width="39" height="39" x="521" y="521"></rect>
          <rect stroke-width="0" width="39" height="39" x="441" y="641"></rect>
          <rect stroke-width="0" width="39" height="39" x="921" y="321"></rect>
          <rect stroke-width="0" width="39" height="39" x="921" y="521"></rect>
          <rect stroke-width="0" width="39" height="39" x="1041" y="641"></rect>
          <rect stroke-width="0" width="39" height="39" x="1241" y="241"></rect>
        </svg>
      </svg>
    </div>
  );
};

export default GridPattern;
