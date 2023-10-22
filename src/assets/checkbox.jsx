import React from "react";

const checkbox = ({ onClick, change }) => {
    const Svgbox = {
        height: '25px',
        transition: 'transform 5.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
  return (
    <div onClick={onClick} style={Svgbox}>
      {change ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="44"
          viewBox="0 0 57 44"
          fill="none"
          style={{width: '100%', height: '100%'}}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.857 3.59215C17.597 3.49215 19.335 3.50015 21.075 3.50015C21.087 3.50015 29.892 3.50015 29.892 3.50015C31.666 3.50015 33.404 3.49215 35.143 3.59215C36.724 3.68215 38.264 3.87415 39.797 4.30315C43.024 5.20515 45.842 7.08915 47.879 9.76015C49.904 12.4142 51 15.6632 51 18.9992C51 22.3392 49.904 25.5862 47.879 28.2402C45.842 30.9102 43.024 32.7952 39.797 33.6972C38.264 34.1262 36.724 34.3172 35.143 34.4082C33.404 34.5082 31.666 34.4992 29.926 34.4992C29.914 34.4992 21.107 34.5002 21.107 34.5002C19.335 34.4992 17.597 34.5082 15.857 34.4082C14.277 34.3172 12.737 34.1262 11.204 33.6972C7.977 32.7952 5.159 30.9102 3.122 28.2402C1.097 25.5862 0 22.3392 0 19.0002C0 15.6632 1.097 12.4142 3.122 9.76015C5.159 7.08915 7.977 5.20515 11.204 4.30315C12.737 3.87415 14.277 3.68215 15.857 3.59215Z"
            fill="#00A85A"
          />
          <g filter="url(#filter0_dd_2117_118450)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.5 32.5C42.9558 32.5 49 26.4558 49 19C49 11.5442 42.9558 5.5 35.5 5.5C28.0442 5.5 22 11.5442 22 19C22 26.4558 28.0442 32.5 35.5 32.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_2117_118450"
              x="14"
              y="0.5"
              width="43"
              height="43"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2117_118450"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_2117_118450"
                result="effect2_dropShadow_2117_118450"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2117_118450"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57"
          height="44"
          viewBox="0 0 57 44"
          fill="none"
          style={{width: '100%', height: '100%'}}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.857 3.59215C23.597 3.49215 25.335 3.50015 27.075 3.50015C27.087 3.50015 35.892 3.50015 35.892 3.50015C37.666 3.50015 39.404 3.49215 41.143 3.59215C42.724 3.68215 44.264 3.87415 45.797 4.30315C49.024 5.20515 51.842 7.08915 53.879 9.76015C55.904 12.4142 57 15.6632 57 18.9992C57 22.3392 55.904 25.5862 53.879 28.2402C51.842 30.9102 49.024 32.7952 45.797 33.6972C44.264 34.1262 42.724 34.3172 41.143 34.4082C39.404 34.5082 37.666 34.4992 35.926 34.4992C35.914 34.4992 27.107 34.5002 27.107 34.5002C25.335 34.4992 23.597 34.5082 21.857 34.4082C20.277 34.3172 18.737 34.1262 17.204 33.6972C13.977 32.7952 11.159 30.9102 9.122 28.2402C7.097 25.5862 6 22.3392 6 19.0002C6 15.6632 7.097 12.4142 9.122 9.76015C11.159 7.08915 13.977 5.20515 17.204 4.30315C18.737 3.87415 20.277 3.68215 21.857 3.59215Z"
            fill="#ff0533"
            fill-opacity="1"
          />
          <g filter="url(#filter0_dd_2130_6589)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.5 32.5C28.9558 32.5 35 26.4558 35 19C35 11.5442 28.9558 5.5 21.5 5.5C14.0442 5.5 8 11.5442 8 19C8 26.4558 14.0442 32.5 21.5 32.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_2130_6589"
              x="0"
              y="0.5"
              width="43"
              height="43"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2130_6589"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_2130_6589"
                result="effect2_dropShadow_2130_6589"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_2130_6589"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default checkbox;
