import React from "react";

type Props = {
  className?: string;
};

const Map = (props: Props) => {
  const position = [51.505, -0.09];

  return (
    <div
      className={`${
        props.className && props.className
      } w-full min-h-[470px] bg-[url('/map.png')] bg-cover bg-no-repeat relative`}
    >
      <div className="controllers absolute top-20 right-28 flex gap-8">
        <div className="bg-white w-[500px] rounded-lg text-[14px] flex gap-2 items-center border font-normal border-zinc-200 py-3 px-4 leading-none shadow-[0px_7px_20px_0_rgba(0,0,0,0.05)]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.52">
              <path
                d="M6.68231 12.3646C9.82056 12.3646 12.3646 9.82056 12.3646 6.68231C12.3646 3.54406 9.82056 1 6.68231 1C3.54406 1 1 3.54406 1 6.68231C1 9.82056 3.54406 12.3646 6.68231 12.3646Z"
                stroke="#667580"
                stroke-width="1.42058"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7852 13.7851L10.6954 10.6954"
                stroke="#667580"
                stroke-width="1.42058"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <input
            className="appearance-none bg-transparent outline-none w-[50%] grow text-zinc-700 dark:text-zinc-300 placeholder:text-zinc-400"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="cursor-pointer flex bg-white rounded-lg border items-center justify-between px-4">
          <div className="logo">
            <svg
              width="30"
              height="24"
              viewBox="0 0 50 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.7217 23.39V0.62207H45.0627V23.39H42.7217Z"
                fill="url(#paint0_linear_1_1842)"
              />
              <path
                d="M9.9201 0.613281H11.8934L21.7596 23.3899H19.302L16.2256 16.2635H5.54306L2.50245 23.3899H0L9.9201 0.613281ZM15.7143 14.4993L10.8888 3.24203L6.04534 14.4993H15.7143Z"
                fill="url(#paint1_linear_1_1842)"
              />
              <path
                d="M38.3831 19.9315C39.5129 18.9222 40.4031 17.6851 40.9918 16.3065C41.5804 14.9279 41.8533 13.441 41.7914 11.9492C41.7946 9.97028 41.2492 8.02719 40.2128 6.32491C39.1873 4.60039 37.7192 3.16489 35.9524 2.15909C34.2283 1.14618 32.2525 0.61163 30.2389 0.613285H30.0057V3.1023H30.1223C31.278 3.09786 32.4245 3.30219 33.5037 3.7049C34.5647 4.08003 35.5367 4.66026 36.3614 5.41069C37.1861 6.16113 37.8463 7.06624 38.3023 8.07158C38.8111 9.127 39.0804 10.2768 39.0916 11.4427C39.1684 13.8982 38.2761 16.289 36.5982 18.1237L33.1719 14.7089H29.7366L34.7236 19.5472C33.3724 20.3567 31.8249 20.8027 30.2389 20.8398C28.2057 20.8508 26.2474 20.0931 24.7766 18.7263L23.2249 20.8747C24.0447 21.5217 24.9496 22.0592 25.9157 22.4729C27.363 23.09 28.928 23.4025 30.508 23.3899C32.707 23.3349 34.8346 22.6179 36.5982 21.3376L38.5086 23.2502H41.7914L38.3831 19.9315Z"
                fill="url(#paint2_linear_1_1842)"
              />
              <path
                d="M19.6709 8.19408L22.2182 9.01502C22.4269 8.38293 22.7035 7.77405 23.0434 7.19847C23.2933 6.78799 23.5752 6.39676 23.8865 6.0282L21.994 4.3252C20.9633 5.45172 20.1736 6.76697 19.6709 8.19408Z"
                fill="#EA4D9A"
              />
              <path
                d="M25.5793 1.60021L26.6108 3.96695L26.9068 3.83595C27.8721 3.37771 28.9276 3.12749 30.0012 3.10235V0.62207C28.4709 0.624122 26.9603 0.95827 25.5793 1.60021Z"
                fill="#BD202E"
              />
              <path
                d="M25.5815 1.60883C24.3256 2.20713 23.199 3.03425 22.2629 4.04544C22.1732 4.13278 22.0924 4.22884 22.0117 4.32491L23.9222 6.07158C24.6619 5.20503 25.5781 4.49728 26.613 3.99304L25.5815 1.6001V1.60883Z"
                fill="#9858A2"
              />
              <path
                d="M23.2229 20.8747L24.7746 18.7263C24.6012 18.5691 24.4308 18.4031 24.2634 18.2284C23.5653 17.5278 22.9869 16.7229 22.5502 15.8442L20.2451 17.1804C20.947 18.6099 21.9637 19.8712 23.2229 20.8747Z"
                fill="#A6C639"
              />
              <path
                d="M19.8574 16.3336C19.974 16.6218 20.1085 16.9012 20.2431 17.2069L22.5482 15.8707C22.0246 14.7971 21.7433 13.6268 21.723 12.4385L19.0322 12.7267C19.0948 13.9659 19.3738 15.1857 19.8574 16.3336Z"
                fill="#F7EC33"
              />
              <path
                d="M19.0251 12.2026C19.0251 12.3685 19.0251 12.5345 19.0251 12.7004L21.7159 12.4122C21.7159 12.3423 21.7159 12.2725 21.7159 12.2026C21.7093 11.1209 21.8788 10.0449 22.2182 9.01491L19.6709 8.19397C19.2317 9.48674 19.0135 10.841 19.0251 12.2026Z"
                fill="#EA7451"
              />
              <path
                d="M47.4665 4.57828C48.586 4.57828 49.4936 3.71807 49.4936 2.65694C49.4936 1.59581 48.586 0.735596 47.4665 0.735596C46.347 0.735596 45.4395 1.59581 45.4395 2.65694C45.4395 3.71807 46.347 4.57828 47.4665 4.57828Z"
                fill="#209EC9"
              />
              <path
                d="M47.4682 4.17654C48.3599 4.17654 49.0827 3.49619 49.0827 2.65694C49.0827 1.81768 48.3599 1.13733 47.4682 1.13733C46.5766 1.13733 45.8538 1.81768 45.8538 2.65694C45.8538 3.49619 46.5766 4.17654 47.4682 4.17654Z"
                fill="white"
              />
              <path
                d="M48.3891 3.48675L48.0034 2.83174C48.0708 2.79816 48.134 2.75713 48.1918 2.70948C48.2585 2.64488 48.31 2.56685 48.3425 2.48086C48.375 2.39487 48.3879 2.303 48.3801 2.21167C48.3621 2.04959 48.2818 1.90013 48.1554 1.79324C48.029 1.68634 47.8658 1.62992 47.6984 1.63527H46.8374C46.8284 1.63401 46.8193 1.63465 46.8106 1.63716C46.8019 1.63966 46.7939 1.64396 46.7871 1.64977C46.7803 1.65558 46.7748 1.66275 46.7711 1.6708C46.7674 1.67885 46.7655 1.68759 46.7656 1.6964V3.52168C46.7655 3.5305 46.7674 3.53923 46.7711 3.54728C46.7748 3.55533 46.7803 3.56251 46.7871 3.56831C46.7939 3.57412 46.8019 3.57842 46.8106 3.58093C46.8193 3.58343 46.8284 3.58407 46.8374 3.58281H47.1872C47.2048 3.58295 47.2218 3.5768 47.235 3.56553C47.2482 3.55426 47.2567 3.53866 47.2589 3.52168V2.83174H47.5011L47.8689 3.52168C47.8784 3.52704 47.8892 3.52987 47.9003 3.52987C47.9113 3.52987 47.9221 3.52704 47.9316 3.52168H48.3263C48.3362 3.52576 48.3469 3.52787 48.3577 3.52787C48.3685 3.52787 48.3791 3.52576 48.3891 3.52168C48.3981 3.49922 48.3981 3.47428 48.3891 3.45181V3.48675ZM47.7074 2.45621H47.2589V1.95841H47.7074C47.7725 1.95837 47.835 1.98293 47.8819 2.02691C47.9287 2.0709 47.9562 2.13088 47.9586 2.19421C47.961 2.22776 47.9564 2.26144 47.9448 2.29316C47.9333 2.32487 47.9152 2.35393 47.8917 2.37852C47.8681 2.40312 47.8396 2.42271 47.8079 2.43607C47.7762 2.44944 47.742 2.45629 47.7074 2.45621Z"
                fill="#209EC9"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1842"
                  x1="-11.8209"
                  y1="22.7961"
                  x2="68.8786"
                  y2="6.31385"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2D86BA" />
                  <stop offset="0.12" stop-color="#2C89BD" />
                  <stop offset="0.18" stop-color="#2D8CBF" />
                  <stop offset="0.25" stop-color="#2A99CE" />
                  <stop offset="0.34" stop-color="#28A2D8" />
                  <stop offset="0.47" stop-color="#27649D" />
                  <stop offset="0.48" stop-color="#27316C" />
                  <stop offset="0.49" stop-color="#27558E" />
                  <stop offset="0.5" stop-color="#2682BA" />
                  <stop offset="0.51" stop-color="#26A9E0" />
                  <stop offset="0.52" stop-color="#262261" />
                  <stop offset="0.56" stop-color="#2D5D90" />
                  <stop offset="0.62" stop-color="#2B9ACF" />
                  <stop offset="0.67" stop-color="#26A9E0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_1842"
                  x1="-23.6701"
                  y1="25.713"
                  x2="59.0814"
                  y2="-4.58147"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#272664" />
                  <stop offset="0.09" stop-color="#272A67" />
                  <stop offset="0.14" stop-color="#262261" />
                  <stop offset="0.23" stop-color="#272C68" />
                  <stop offset="0.24" stop-color="#27346E" />
                  <stop offset="0.25" stop-color="#293870" />
                  <stop offset="0.35" stop-color="#2E88BC" />
                  <stop offset="0.46" stop-color="#26A9E0" />
                  <stop offset="0.49" stop-color="#2D83B7" />
                  <stop offset="0.55" stop-color="#2A4178" />
                  <stop offset="0.74" stop-color="#2B4D81" />
                  <stop offset="0.78" stop-color="#26A9E0" />
                  <stop offset="0.81" stop-color="#26A9E0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_1842"
                  x1="-21.4246"
                  y1="31.8264"
                  x2="60.5339"
                  y2="1.83388"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#262261" />
                  <stop offset="0.11" stop-color="#262766" />
                  <stop offset="0.23" stop-color="#263573" />
                  <stop offset="0.37" stop-color="#264D8A" />
                  <stop offset="0.51" stop-color="#266EA9" />
                  <stop offset="0.66" stop-color="#2699D1" />
                  <stop offset="0.71" stop-color="#26A9E0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-[13px] text-[#53616C] leading-none pl-3 pr-2">
            Map
          </span>
          <div className="fullscreen">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.56106 0.000444503C6.9949 0.237578 7.16053 0.517786 7.07394 0.868601C6.98025 1.24606 6.70183 1.41791 6.18273 1.41791C4.86894 1.41791 3.55501 1.41791 2.24092 1.41791C1.69533 1.41791 1.42254 1.68939 1.42254 2.23234C1.42254 3.5983 1.42254 4.96411 1.42254 6.32977C1.42254 6.77384 1.11171 7.09401 0.702294 7.08735C0.33551 7.08113 0.0122435 6.78716 0.0104673 6.41547C0.00380659 4.93139 -0.0135117 3.44731 0.0197919 1.96412C0.0402181 1.03868 0.758244 0.258893 1.68053 0.0470719C1.72852 0.0337901 1.77579 0.0180789 1.82218 0L6.56106 0.000444503Z"
                fill="#53616C"
              />
              <path
                d="M18.6256 6.5566C18.6091 6.57934 18.5943 6.60323 18.5812 6.6281C18.42 6.97003 18.1087 7.14499 17.7819 7.07572C17.4373 7.00289 17.2113 6.71602 17.2104 6.33679C17.2104 5.42245 17.2104 4.50811 17.2104 3.59421C17.2104 3.12217 17.2131 2.65057 17.2104 2.17852C17.2078 1.70648 16.9129 1.41916 16.4467 1.41872C15.0608 1.41872 13.6745 1.41872 12.2886 1.41872C11.9298 1.41872 11.6669 1.22732 11.5697 0.909814C11.5261 0.767904 11.5291 0.615765 11.5782 0.475681C11.6274 0.335598 11.7201 0.214932 11.8428 0.131361C11.9143 0.0820689 11.9938 0.0447669 12.0693 0.00213623H16.8095C16.8565 0.0181227 16.9023 0.037218 16.9507 0.049652C17.7242 0.243858 18.2467 0.715608 18.5182 1.4649C18.5599 1.5808 18.5901 1.7007 18.6256 1.82016V6.5566Z"
                fill="#53616C"
              />
              <path
                d="M18.6248 16.8076C18.5804 16.9462 18.5422 17.0865 18.4916 17.2233C18.1999 18.0395 17.4334 18.6101 16.572 18.6168C15.1324 18.6305 13.6928 18.6248 12.2532 18.6203C12.159 18.6216 12.0656 18.6041 11.9784 18.5686C11.8911 18.5332 11.8119 18.4807 11.7453 18.4141C11.6788 18.3475 11.6262 18.2683 11.5908 18.1811C11.5554 18.0938 11.5378 18.0004 11.5391 17.9063C11.5445 17.511 11.8544 17.21 12.274 17.2091C13.6396 17.2061 15.0054 17.2061 16.3713 17.2091C16.9436 17.2091 17.2083 16.9426 17.2083 16.3653C17.2083 15 17.2083 13.6342 17.2083 12.2679C17.2083 11.9015 17.4388 11.6209 17.778 11.5494C18.0928 11.4828 18.3997 11.644 18.5613 11.9562C18.5808 11.9944 18.6057 12.0312 18.6248 12.0685V16.8076Z"
                fill="#53616C"
              />
              <path
                d="M0.00204409 14.427C0.00204409 13.733 0.00204409 13.039 0.00204409 12.3447C0.00204409 11.8563 0.288455 11.5334 0.71563 11.5365C1.1428 11.5396 1.419 11.8634 1.419 12.3558C1.419 13.6993 1.419 15.0429 1.419 16.3867C1.419 16.928 1.69564 17.206 2.23383 17.206C3.59972 17.206 4.96517 17.206 6.33106 17.206C6.87235 17.206 7.22848 17.6869 7.04154 18.1634C6.92786 18.4507 6.70584 18.6181 6.39545 18.6194C4.93408 18.6243 3.47183 18.6394 2.01047 18.6128C0.927883 18.5928 0.0313515 17.6607 0.00781693 16.5736C-0.00772475 15.8578 0.00470827 15.1415 0.00470827 14.4256L0.00204409 14.427Z"
                fill="#53616C"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
