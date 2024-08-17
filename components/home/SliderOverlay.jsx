import React from "react";

const SliderOverlay = ({ link, url }) => {
  return (
    <div className="image-overlay flex">
      <a href={link} target="_blank">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M15 3.5H20.5M20.5 3.5V9M20.5 3.5L12.5 11.5"
            stroke="white"
            strokeWidth={2}
          />
          <path
            d="M11.5 5.5H7.5C6.39543 5.5 5.5 6.39543 5.5 7.5V16.5C5.5 17.6046 6.39543 18.5 7.5 18.5H16.5C17.6046 18.5 18.5 17.6046 18.5 16.5V12.5"
            stroke="white"
            strokeWidth={2}
            stroke-linecap="round"
          />
        </svg>
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13.7365 21.8481C15.0297 21.62 16.2654 21.1395 17.373 20.4339C18.4806 19.7283 19.4383 18.8115 20.1915 17.7358C20.9448 16.66 21.4787 15.4465 21.763 14.1644C22.0472 12.8823 22.0761 11.5568 21.8481 10.2635C21.62 8.97025 21.1395 7.73456 20.4339 6.627C19.7283 5.51945 18.8115 4.56171 17.7358 3.80848C16.66 3.05525 15.4465 2.52127 14.1644 2.23704C12.8823 1.95281 11.5568 1.92388 10.2635 2.15192C8.97025 2.37996 7.73456 2.86049 6.627 3.56609C5.51945 4.27168 4.56171 5.18851 3.80848 6.26424C3.05525 7.33996 2.52127 8.55352 2.23704 9.83561C1.95281 11.1177 1.92388 12.4432 2.15192 13.7365C2.37996 15.0298 2.86049 16.2654 3.56609 17.373C4.27168 18.4806 5.18851 19.4383 6.26424 20.1915C7.33996 20.9448 8.55352 21.4787 9.83561 21.763C11.1177 22.0472 12.4432 22.0761 13.7365 21.8481L13.7365 21.8481Z"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M12 12L12 18"
          stroke="white"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M12 7L12 6"
          stroke="white"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    </div>
  );
};

export default SliderOverlay;
