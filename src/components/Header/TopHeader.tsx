type Props = {};

function TopHeader({}: Props) {
  return (
    <div className="flex items-center justify-between gap-12 w-full px-20 bg-white border-b ">
      <div className="logo">
        <svg
          width="50"
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
      <nav className="flex items-center justify-center grow gap-16 px-28 capitalize	text-[#667580]">
        <div className="py-4 flex items-center gap-4 border-b-[3px] border-[#4BA9FF]">
          <span>Home</span>
        </div>
        <div className="py-4 flex items-center gap-4 border-b-[3px] border-white">
          <span>Ranking</span>
        </div>
        <div className="py-4 flex items-center gap-4 border-b-[3px] border-white">
          <span>Monitors</span>
        </div>
        <div className="py-4 flex items-center gap-4 border-b-[3px] border-white">
          <span>Resources</span>
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1647 1L7.5691 5.59555C7.02638 6.13828 6.13828 6.13828 5.59555 5.59555L1 1"
              stroke="#53616C"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </nav>
      <div className="lang-selector text-[#667580]">
        <div className="flex items-center leading-none">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14.75C11.728 14.75 14.75 11.728 14.75 8C14.75 4.27198 11.728 1.25 8 1.25C4.27198 1.25 1.25 4.27198 1.25 8C1.25 11.728 4.27198 14.75 8 14.75Z"
              stroke="#53616C"
              stroke-width="1.0125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.30045 1.92493H5.97545C4.65922 5.86798 4.65922 10.1319 5.97545 14.0749H5.30045M10.0255 1.92493C11.3417 5.86798 11.3417 10.1319 10.0255 14.0749"
              stroke="#53616C"
              stroke-width="1.0125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.92383 10.7001V10.0251C5.86689 11.3413 10.1308 11.3413 14.0738 10.0251V10.7001M1.92383 5.97509C5.86689 4.65886 10.1308 4.65886 14.0738 5.97509"
              stroke="#53616C"
              stroke-width="1.0125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="pl-[5px] pr-[10px]">Eng</span>
          <svg
            width="13"
            height="7"
            viewBox="0 0 13 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1647 1L7.5691 5.59555C7.02638 6.13828 6.13828 6.13828 5.59555 5.59555L1 1"
              stroke="#53616C"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="login text-white">
        <button className="rounded-lg bg-[#4BA9FF] leading-none px-[30px] py-[12px]">
          Login
        </button>
      </div>
    </div>
  );
}

export default TopHeader;
