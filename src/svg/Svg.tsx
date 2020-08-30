import React from "react";

interface SvgProps {
  size: number;
  color: string;
}

export const Instagram = ({ color, size }: SvgProps) => (
  <svg
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    width={size}
    height={size}
  >
    <path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z" />
  </svg>
);

export const Facebook = ({ color, size }: SvgProps) => (
  <svg
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z" />
  </svg>
);

export const Twitter = ({ color, size }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
  >
    <path
      fill={color ? color : "#03A9F4"}
      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    />
  </svg>
);

export const User = ({ color, size }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <defs></defs>
    <rect width={size} height={size} />
    <path
      fill={color}
      d="M19,22A7,7,0,0,0,5,22a1,1,0,1,1-2,0,9,9,0,1,1,18,0,1,1,0,1,1-2,0ZM7,6a5,5,0,1,1,5,5A5.005,5.005,0,0,1,7,6ZM9,6a3,3,0,1,0,3-3A3,3,0,0,0,9,6Z"
    />
  </svg>
);

export const Cart = ({ color, size }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 1.2}
    viewBox="0 0 20.001 24"
  >
    <defs></defs>
    <path
      fill={color}
      d="M3.853,24A1.819,1.819,0,0,1,2,22.222a1.514,1.514,0,0,1,.009-.172L3.27,9.606A1.818,1.818,0,0,1,5.113,8H7V5.444A5.234,5.234,0,0,1,12,0a5.212,5.212,0,0,1,5,5.222l0,.222V8h1.886a1.819,1.819,0,0,1,1.844,1.606L21.992,22.05a1.717,1.717,0,0,1-.39,1.273,1.859,1.859,0,0,1-1.275.668,1.634,1.634,0,0,1-.179.009ZM4,22H20L18.762,10H5.238ZM15,8V5.444A3.248,3.248,0,0,0,12,2,3.22,3.22,0,0,0,9,5.247l0,.2V8Z"
      transform="translate(-2)"
    />
  </svg>
);

export const Search = ({ color, size }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <defs></defs>
    <circle fill={color} cx="7.5" cy="7.5" r="7.5" transform="translate(2 2)" />
    <path fill={color} d="M0,0,7,7" transform="translate(15 15)" />
  </svg>
);

export function User2({ size, color }: SvgProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M19 22a7 7 0 00-14 0 1 1 0 11-2 0 9 9 0 1118 0 1 1 0 11-2 0zM7 6a5 5 0 115 5 5.005 5.005 0 01-5-5zm2 0a3 3 0 103-3 3 3 0 00-3 3z"
        fill="#1b2437"
      />
    </svg>
  );
}

export function Star({ size, color }: SvgProps) {
  return (
    <svg width={size} height={size * 0.92} viewBox="0 0 24 22" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17.681L19.416 22l-1.968-8.14L24 8.383l-8.628-.706L12 0 8.628 7.677 0 8.383l6.552 5.477L4.584 22 12 17.681z"
        fill={color}
      />
    </svg>
  );
}

export function Send() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M21.621 11.603L2.984 2.078c-.526-.269-1.115.2-.958.764l2.3 6.92c.073.262 6.869 2.29 6.869 2.29s-6.782 1.959-6.849 2.22L2.23 21.142c-.145.562.455 1.043.975.786l18.43-9.121c.495-.245.485-.95-.013-1.205z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Plus() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12h16M12 4v16"
        stroke="#D1D1D6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Insta() {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.96 4.704c-.038-.85-.176-1.435-.373-1.941a3.904 3.904 0 00-.925-1.419 3.938 3.938 0 00-1.416-.922c-.51-.197-1.091-.334-1.941-.372C10.448.01 10.175 0 8.003 0 5.83 0 5.558.01 4.705.047c-.85.037-1.435.175-1.941.372a3.905 3.905 0 00-1.42.925A3.94 3.94 0 00.422 2.76C.225 3.27.088 3.85.05 4.7.01 5.558 0 5.83 0 8.003s.01 2.444.047 3.297c.037.85.175 1.435.372 1.941.203.538.519 1.019.925 1.42.4.405.885.721 1.416.921.51.197 1.091.335 1.942.372C5.555 15.991 5.827 16 8 16s2.445-.01 3.298-.047c.85-.037 1.435-.175 1.941-.372a4.092 4.092 0 002.342-2.34c.197-.51.335-1.092.372-1.942.038-.853.047-1.125.047-3.297 0-2.173-.003-2.445-.04-3.298zm-1.442 6.533c-.034.781-.166 1.203-.275 1.484a2.655 2.655 0 01-1.52 1.52c-.28.109-.706.24-1.484.274-.844.038-1.098.047-3.233.047s-2.391-.009-3.232-.047c-.782-.034-1.204-.165-1.485-.275a2.463 2.463 0 01-.92-.597 2.489 2.489 0 01-.596-.918c-.11-.282-.241-.707-.275-1.485-.038-.844-.047-1.097-.047-3.232 0-2.135.009-2.391.047-3.232.034-.781.165-1.203.275-1.485.128-.347.331-.662.6-.919.26-.265.572-.469.919-.597.281-.109.707-.24 1.485-.275.844-.037 1.097-.047 3.232-.047 2.139 0 2.392.01 3.233.047.781.035 1.203.166 1.485.275.347.128.663.332.919.597.266.26.469.572.597.92.11.28.24.706.275 1.484.038.844.047 1.097.047 3.232 0 2.135-.01 2.385-.047 3.229zm-6.571-6.96a3.948 3.948 0 000 7.894 3.947 3.947 0 000-7.894zm0 6.507a2.56 2.56 0 110-5.12 2.56 2.56 0 010 5.12zm4.102-5.741a.921.921 0 100-1.843.921.921 0 000 1.843z"
        fill="#1B2437"
      />
    </svg>
  );
}

export function Cart2() {
  return (
    <svg width={20.001} height={24} viewBox="0 0 20.001 24">
      <path
        d="M1.853 24A1.819 1.819 0 010 22.222a1.514 1.514 0 01.009-.172L1.27 9.606A1.818 1.818 0 013.113 8H5V5.444A5.234 5.234 0 0110 0a5.212 5.212 0 015 5.222V8h1.886a1.819 1.819 0 011.844 1.606l1.262 12.444a1.717 1.717 0 01-.39 1.273 1.859 1.859 0 01-1.275.668 1.634 1.634 0 01-.179.009zM2 22h16l-1.238-12H3.238zM13 8V5.444A3.248 3.248 0 0010 2a3.22 3.22 0 00-3 3.247V8z"
        fill="#1b2437"
      />
    </svg>
  );
}

export function Cancel() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M6.343 6.343l11.314 11.314M17.657 6.343L6.343 17.657"
        stroke="#D1D1D6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeft({ size, color }: SvgProps) {
  return (
    <svg width={size} height={size * 1.63} viewBox="0 0 11 18" fill="none">
      <path
        d="M9.603 1l-8 8 8 8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRight({ size, color }: SvgProps) {
  return (
    <svg width={size} height={size * 1.63} viewBox="0 0 11 18" fill="none">
      <path
        d="M1.397 17l8-8-8-8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <path
        d="M14 26L4 16 14 6M4 16h25.163"
        stroke="#EDA3B5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <path
        d="M18 6l10 10-10 10M28 16H2.837"
        stroke="#EDA3B5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Location() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M19 12c0 3.144-.851 5.945-2.175 7.93C15.496 21.924 13.77 23 12 23c-1.77 0-3.496-1.077-4.825-3.07C5.851 17.946 5 15.145 5 12s.851-5.945 2.175-7.93C8.504 2.076 10.23 1 12 1c1.77 0 3.496 1.077 4.825 3.07C18.149 6.054 19 8.855 19 12z"
        stroke="#1B2437"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <circle cx={12} cy={8} r={2} stroke="#1B2437" strokeWidth={2} />
    </svg>
  );
}

export function Phone() {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <path
        d="M18.655 21A2.356 2.356 0 0021 18.638v-3.15a.787.787 0 00-.536-.747l-4.701-1.574a.784.784 0 00-.685.091l-1.999 1.336c-2.145-1.02-4.681-3.54-5.69-5.653l1.333-2.004a.79.79 0 00.09-.686l-1.57-4.713A.785.785 0 006.497 1H3.356A2.356 2.356 0 001 3.351c0 4.35 1.973 8.816 5.413 12.25C9.85 19.032 14.312 21 18.655 21z"
        stroke="#1B2437"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Mail() {
  return (
    <svg width={24} height={17} viewBox="0 0 24 17" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.143 0H.857A.854.854 0 000 .85v15.3c0 .47.384.85.857.85h22.286c.473 0 .857-.38.857-.85V.85c0-.47-.384-.85-.857-.85zm-1.406 1.7L12 9.127 2.263 1.7h19.474zM1.714 3.426V15.3h20.572V3.426l-9.764 7.448a.863.863 0 01-1.044 0L1.714 3.426z"
        fill="#000"
      />
    </svg>
  );
}
