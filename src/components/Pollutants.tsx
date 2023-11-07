type Props = {
  name: string;
  unit: string;
  value: string;
  color: string;
};

function Pollutants(props: Props) {
  return (
    <div className="border-2 border-white cursor-pointer hover:border-[#A3A3C8] min-w-[260px] flex flex-col rounded-lg overflow-hidden bg-[#F7F7FC] text-[#667580] text-[12px]">
      <div
        className={`border-${props.color} flex items-center px-4 py-3 gap-3 border-l-4 leading-none`}
      >
        <i className="icon">
          <svg
            width="38"
            height="28"
            viewBox="0 0 38 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.7672 10.8324C31.0917 10.8324 31.3547 10.5951 31.3547 10.3024C31.3547 10.0097 31.0917 9.77246 30.7672 9.77246C30.4427 9.77246 30.1797 10.0097 30.1797 10.3024C30.1797 10.5951 30.4427 10.8324 30.7672 10.8324Z"
              fill="#677580"
            />
            <path
              d="M34.0016 10.2337C34.3261 10.2337 34.5891 9.99646 34.5891 9.70378C34.5891 9.41109 34.3261 9.17383 34.0016 9.17383C33.6771 9.17383 33.4141 9.41109 33.4141 9.70378C33.4141 9.99646 33.6771 10.2337 34.0016 10.2337Z"
              fill="#677580"
            />
            <path
              d="M34.9274 6.44515C35.2518 6.44515 35.5149 6.20789 35.5149 5.9152C35.5149 5.62252 35.2518 5.38525 34.9274 5.38525C34.6029 5.38525 34.3398 5.62252 34.3398 5.9152C34.3398 6.20789 34.6029 6.44515 34.9274 6.44515Z"
              fill="#677580"
            />
            <path
              d="M26.7321 6.97494C27.0565 6.97494 27.3196 6.73767 27.3196 6.44499C27.3196 6.15231 27.0565 5.91504 26.7321 5.91504C26.4076 5.91504 26.1445 6.15231 26.1445 6.44499C26.1445 6.73767 26.4076 6.97494 26.7321 6.97494Z"
              fill="#677580"
            />
            <path
              d="M15.9274 9.17367C16.2518 9.17367 16.5149 8.9364 16.5149 8.64372C16.5149 8.35104 16.2518 8.11377 15.9274 8.11377C15.6029 8.11377 15.3398 8.35104 15.3398 8.64372C15.3398 8.9364 15.6029 9.17367 15.9274 9.17367Z"
              fill="#677580"
            />
            <path
              d="M23.0992 19.6058C23.4237 19.6058 23.6868 19.3685 23.6868 19.0758C23.6868 18.7832 23.4237 18.5459 23.0992 18.5459C22.7748 18.5459 22.5117 18.7832 22.5117 19.0758C22.5117 19.3685 22.7748 19.6058 23.0992 19.6058Z"
              fill="#677580"
            />
            <path
              d="M9.37658 20.1366C9.70106 20.1366 9.9641 19.8993 9.9641 19.6066C9.9641 19.3139 9.70106 19.0767 9.37658 19.0767C9.0521 19.0767 8.78906 19.3139 8.78906 19.6066C8.78906 19.8993 9.0521 20.1366 9.37658 20.1366Z"
              fill="#677580"
            />
            <path
              d="M10.0875 23.3006C10.412 23.3006 10.675 23.0634 10.675 22.7707C10.675 22.478 10.412 22.2407 10.0875 22.2407C9.76304 22.2407 9.5 22.478 9.5 22.7707C9.5 23.0634 9.76304 23.3006 10.0875 23.3006Z"
              fill="#677580"
            />
            <path
              d="M18.8531 22.1873C19.1776 22.1873 19.4407 21.9501 19.4407 21.6574C19.4407 21.3647 19.1776 21.1274 18.8531 21.1274C18.5287 21.1274 18.2656 21.3647 18.2656 21.6574C18.2656 21.9501 18.5287 22.1873 18.8531 22.1873Z"
              fill="#677580"
            />
            <path
              d="M22.5211 10.6195C22.8456 10.6195 23.1086 10.3822 23.1086 10.0895C23.1086 9.79684 22.8456 9.55957 22.5211 9.55957C22.1966 9.55957 21.9336 9.79684 21.9336 10.0895C21.9336 10.3822 22.1966 10.6195 22.5211 10.6195Z"
              fill="#677580"
            />
            <path
              d="M19.6344 9.55258C19.9589 9.55258 20.2219 9.31531 20.2219 9.02263C20.2219 8.72994 19.9589 8.49268 19.6344 8.49268C19.3099 8.49268 19.0469 8.72994 19.0469 9.02263C19.0469 9.31531 19.3099 9.55258 19.6344 9.55258Z"
              fill="#677580"
            />
            <path
              d="M30.1813 24.0721C30.5057 24.0721 30.7688 23.8348 30.7688 23.5422C30.7688 23.2495 30.5057 23.0122 30.1813 23.0122C29.8568 23.0122 29.5938 23.2495 29.5938 23.5422C29.5938 23.8348 29.8568 24.0721 30.1813 24.0721Z"
              fill="#677580"
            />
            <path
              d="M31.4508 19.1917C31.7753 19.1917 32.0383 18.9545 32.0383 18.6618C32.0383 18.3691 31.7753 18.1318 31.4508 18.1318C31.1263 18.1318 30.8633 18.3691 30.8633 18.6618C30.8633 18.9545 31.1263 19.1917 31.4508 19.1917Z"
              fill="#677580"
            />
            <path
              d="M25.0836 9.64388C25.4081 9.64388 25.6711 9.40662 25.6711 9.11393C25.6711 8.82125 25.4081 8.58398 25.0836 8.58398C24.7591 8.58398 24.4961 8.82125 24.4961 9.11393C24.4961 9.40662 24.7591 9.64388 25.0836 9.64388Z"
              fill="#677580"
            />
            <path
              d="M23.5055 6.44467C23.83 6.44467 24.093 6.2074 24.093 5.91472C24.093 5.62203 23.83 5.38477 23.5055 5.38477C23.181 5.38477 22.918 5.62203 22.918 5.91472C22.918 6.2074 23.181 6.44467 23.5055 6.44467Z"
              fill="#677580"
            />
            <path
              d="M26.4 12.2786C26.7245 12.2786 26.9875 12.0414 26.9875 11.7487C26.9875 11.456 26.7245 11.2188 26.4 11.2188C26.0755 11.2188 25.8125 11.456 25.8125 11.7487C25.8125 12.0414 26.0755 12.2786 26.4 12.2786Z"
              fill="#677580"
            />
            <path
              d="M31.6461 4.48959C31.9706 4.48959 32.2336 4.25232 32.2336 3.95964C32.2336 3.66695 31.9706 3.42969 31.6461 3.42969C31.3216 3.42969 31.0586 3.66695 31.0586 3.95964C31.0586 4.25232 31.3216 4.48959 31.6461 4.48959Z"
              fill="#677580"
            />
            <path
              d="M32.2125 7.80599C32.537 7.80599 32.8 7.56873 32.8 7.27604C32.8 6.98336 32.537 6.74609 32.2125 6.74609C31.888 6.74609 31.625 6.98336 31.625 7.27604C31.625 7.56873 31.888 7.80599 32.2125 7.80599Z"
              fill="#677580"
            />
            <path
              d="M34.9508 12.7069C35.2753 12.7069 35.5383 12.4696 35.5383 12.1769C35.5383 11.8842 35.2753 11.647 34.9508 11.647C34.6263 11.647 34.3633 11.8842 34.3633 12.1769C34.3633 12.4696 34.6263 12.7069 34.9508 12.7069Z"
              fill="#677580"
            />
            <path
              d="M35.5094 16.0228C35.8339 16.0228 36.0969 15.7855 36.0969 15.4928C36.0969 15.2002 35.8339 14.9629 35.5094 14.9629C35.1849 14.9629 34.9219 15.2002 34.9219 15.4928C34.9219 15.7855 35.1849 16.0228 35.5094 16.0228Z"
              fill="#677580"
            />
            <path
              d="M32.236 21.5897C32.5604 21.5897 32.8235 21.3524 32.8235 21.0597C32.8235 20.7671 32.5604 20.5298 32.236 20.5298C31.9115 20.5298 31.6484 20.7671 31.6484 21.0597C31.6484 21.3524 31.9115 21.5897 32.236 21.5897Z"
              fill="#677580"
            />
            <path
              d="M26.4664 21.0599C26.7909 21.0599 27.0539 20.8226 27.0539 20.5299C27.0539 20.2373 26.7909 20 26.4664 20C26.1419 20 25.8789 20.2373 25.8789 20.5299C25.8789 20.8226 26.1419 21.0599 26.4664 21.0599Z"
              fill="#677580"
            />
            <path
              d="M24.3414 22.7171C24.6659 22.7171 24.9289 22.4799 24.9289 22.1872C24.9289 21.8945 24.6659 21.6572 24.3414 21.6572C24.0169 21.6572 23.7539 21.8945 23.7539 22.1872C23.7539 22.4799 24.0169 22.7171 24.3414 22.7171Z"
              fill="#677580"
            />
            <path
              d="M27.0289 24.3753C27.3534 24.3753 27.6164 24.1381 27.6164 23.8454C27.6164 23.5527 27.3534 23.3154 27.0289 23.3154C26.7044 23.3154 26.4414 23.5527 26.4414 23.8454C26.4414 24.1381 26.7044 24.3753 27.0289 24.3753Z"
              fill="#677580"
            />
            <path
              d="M16.943 19.5975C17.2675 19.5975 17.5305 19.3602 17.5305 19.0675C17.5305 18.7749 17.2675 18.5376 16.943 18.5376C16.6185 18.5376 16.3555 18.7749 16.3555 19.0675C16.3555 19.3602 16.6185 19.5975 16.943 19.5975Z"
              fill="#677580"
            />
            <path
              d="M12.861 19.8255C13.1854 19.8255 13.4485 19.5883 13.4485 19.2956C13.4485 19.0029 13.1854 18.7656 12.861 18.7656C12.5365 18.7656 12.2734 19.0029 12.2734 19.2956C12.2734 19.5883 12.5365 19.8255 12.861 19.8255Z"
              fill="#677580"
            />
            <path
              d="M13.6696 23.0116C13.994 23.0116 14.2571 22.7743 14.2571 22.4816C14.2571 22.1889 13.994 21.9517 13.6696 21.9517C13.3451 21.9517 13.082 22.1889 13.082 22.4816C13.082 22.7743 13.3451 23.0116 13.6696 23.0116Z"
              fill="#677580"
            />
            <path
              d="M14.525 11.4622C14.8495 11.4622 15.1125 11.225 15.1125 10.9323C15.1125 10.6396 14.8495 10.4023 14.525 10.4023C14.2005 10.4023 13.9375 10.6396 13.9375 10.9323C13.9375 11.225 14.2005 11.4622 14.525 11.4622Z"
              fill="#677580"
            />
            <path
              d="M29.1031 9.17318C29.4276 9.17318 29.6907 8.93591 29.6907 8.64323C29.6907 8.35055 29.4276 8.11328 29.1031 8.11328C28.7787 8.11328 28.5156 8.35055 28.5156 8.64323C28.5156 8.93591 28.7787 9.17318 29.1031 9.17318Z"
              fill="#677580"
            />
            <path
              d="M16.193 24.2235C16.5175 24.2235 16.7805 23.9862 16.7805 23.6935C16.7805 23.4008 16.5175 23.1636 16.193 23.1636C15.8685 23.1636 15.6055 23.4008 15.6055 23.6935C15.6055 23.9862 15.8685 24.2235 16.193 24.2235Z"
              fill="#677580"
            />
            <path
              d="M4.58752 24.7533C4.912 24.7533 5.17504 24.516 5.17504 24.2233C5.17504 23.9306 4.912 23.6934 4.58752 23.6934C4.26304 23.6934 4 23.9306 4 24.2233C4 24.516 4.26304 24.7533 4.58752 24.7533Z"
              fill="#677580"
            />
            <path
              d="M7.74768 25.4349C8.07215 25.4349 8.33519 25.1976 8.33519 24.9049C8.33519 24.6123 8.07215 24.375 7.74768 24.375C7.4232 24.375 7.16016 24.6123 7.16016 24.9049C7.16016 25.1976 7.4232 25.4349 7.74768 25.4349Z"
              fill="#677580"
            />
            <path
              d="M19.4274 4.19369C19.7518 4.19369 20.0149 3.95642 20.0149 3.66374C20.0149 3.37106 19.7518 3.13379 19.4274 3.13379C19.1029 3.13379 18.8398 3.37106 18.8398 3.66374C18.8398 3.95642 19.1029 4.19369 19.4274 4.19369Z"
              fill="#677580"
            />
            <path
              d="M17.8727 6.67806C18.1972 6.67806 18.4602 6.4408 18.4602 6.14811C18.4602 5.85543 18.1972 5.61816 17.8727 5.61816C17.5482 5.61816 17.2852 5.85543 17.2852 6.14811C17.2852 6.4408 17.5482 6.67806 17.8727 6.67806Z"
              fill="#677580"
            />
            <path
              d="M22.9117 3.13314C23.2362 3.13314 23.4993 2.89588 23.4993 2.60319C23.4993 2.31051 23.2362 2.07324 22.9117 2.07324C22.5873 2.07324 22.3242 2.31051 22.3242 2.60319C22.3242 2.89588 22.5873 3.13314 22.9117 3.13314Z"
              fill="#677580"
            />
            <path
              d="M10.0211 9.70443C10.3456 9.70443 10.6086 9.46716 10.6086 9.17448C10.6086 8.8818 10.3456 8.64453 10.0211 8.64453C9.69663 8.64453 9.43359 8.8818 9.43359 9.17448C9.43359 9.46716 9.69663 9.70443 10.0211 9.70443Z"
              fill="#677580"
            />
            <path
              d="M8.47033 12.1878C8.79481 12.1878 9.05785 11.9506 9.05785 11.6579C9.05785 11.3652 8.79481 11.1279 8.47033 11.1279C8.14585 11.1279 7.88281 11.3652 7.88281 11.6579C7.88281 11.9506 8.14585 12.1878 8.47033 12.1878Z"
              fill="#677580"
            />
            <path
              d="M11.6305 12.1878C11.955 12.1878 12.218 11.9506 12.218 11.6579C12.218 11.3652 11.955 11.1279 11.6305 11.1279C11.306 11.1279 11.043 11.3652 11.043 11.6579C11.043 11.9506 11.306 12.1878 11.6305 12.1878Z"
              fill="#677580"
            />
            <path
              d="M3.97424 19.1248C4.29872 19.1248 4.56176 18.8876 4.56176 18.5949C4.56176 18.3022 4.29872 18.0649 3.97424 18.0649C3.64976 18.0649 3.38672 18.3022 3.38672 18.5949C3.38672 18.8876 3.64976 19.1248 3.97424 19.1248Z"
              fill="#677580"
            />
            <path
              d="M2.41955 21.6087C2.74403 21.6087 3.00707 21.3715 3.00707 21.0788C3.00707 20.7861 2.74403 20.5488 2.41955 20.5488C2.09507 20.5488 1.83203 20.7861 1.83203 21.0788C1.83203 21.3715 2.09507 21.6087 2.41955 21.6087Z"
              fill="#677580"
            />
            <path
              d="M7.45471 18.0638C7.77918 18.0638 8.04223 17.8265 8.04223 17.5339C8.04223 17.2412 7.77918 17.0039 7.45471 17.0039C7.13023 17.0039 6.86719 17.2412 6.86719 17.5339C6.86719 17.8265 7.13023 18.0638 7.45471 18.0638Z"
              fill="#677580"
            />
            <path
              d="M5.57971 21.6087C5.90418 21.6087 6.16723 21.3715 6.16723 21.0788C6.16723 20.7861 5.90418 20.5488 5.57971 20.5488C5.25523 20.5488 4.99219 20.7861 4.99219 21.0788C4.99219 21.3715 5.25523 21.6087 5.57971 21.6087Z"
              fill="#677580"
            />
            <path
              d="M37.2049 10.3546C37.2199 10.3277 37.2298 10.2986 37.2343 10.2688C37.3708 9.70937 37.4419 9.13861 37.4465 8.56584C37.4465 8.43983 37.4397 8.31449 37.4322 8.18847C37.4246 8.06246 37.4103 7.93099 37.3952 7.80497C37.3801 7.67896 37.3589 7.56656 37.337 7.44804C37.3157 7.32531 37.2862 7.20384 37.2487 7.0843C37.2411 7.06386 37.2411 7.04411 37.2343 7.02436C37.17 6.8065 37.0916 6.59224 36.9995 6.3827C36.9481 6.2703 36.8967 6.15791 36.8378 6.04552C36.7789 5.93312 36.7132 5.82073 36.6475 5.71447C36.6037 5.64226 36.5592 5.57823 36.5078 5.5033C36.3575 5.28005 36.1884 5.06758 36.0019 4.86777H35.9951C35.9362 4.79965 35.8773 4.73563 35.8116 4.66955C35.7459 4.60348 35.6794 4.54422 35.6137 4.47814C35.474 4.34191 35.3275 4.22679 35.1735 4.10078C35.1338 4.06789 35.0922 4.03696 35.0489 4.00814L35.0345 3.99519C34.8873 3.8828 34.7324 3.77654 34.5814 3.67777C34.4304 3.579 34.259 3.47887 34.0981 3.39304C33.9728 3.32493 33.8557 3.26702 33.7311 3.20776C33.6284 3.16144 33.5257 3.11513 33.429 3.08243C33.3231 3.03212 33.2128 2.98996 33.099 2.95641C32.9717 2.90361 32.8393 2.86165 32.7033 2.83108C32.5348 2.78418 32.3633 2.74642 32.1898 2.718C32.1227 2.70091 32.0539 2.68996 31.9844 2.68531C31.8849 2.66542 31.784 2.65221 31.6823 2.6458C31.594 2.63217 31.5064 2.62605 31.418 2.61924C30.428 2.55929 29.3866 2.718 28.3158 3.08856C28.0447 3.1812 27.7811 3.28065 27.4949 3.3801C27.282 3.16144 27.1174 2.97617 26.9376 2.80451C26.8274 2.69825 26.7179 2.60016 26.6076 2.50003L26.5782 2.47346C26.4536 2.36788 26.3214 2.26162 26.2006 2.16285C26.1793 2.1492 26.1596 2.13368 26.1417 2.11653C26.0171 2.0307 25.9 1.9442 25.7754 1.86518C25.6357 1.77254 25.4968 1.68671 25.3571 1.60701C25.2174 1.52732 25.0716 1.45512 24.9319 1.38904C24.5064 1.18738 24.056 1.03189 23.59 0.925846C23.4407 0.890094 23.2895 0.861445 23.1369 0.840018C23.0787 0.830086 23.02 0.82349 22.9609 0.820265C22.8544 0.802812 22.7466 0.791663 22.6385 0.786889C22.5725 0.78122 22.5062 0.778947 22.4399 0.780079C22.3427 0.769314 22.2447 0.764988 22.1469 0.767136C22.0881 0.766006 22.0293 0.768279 21.9709 0.773946C21.5811 0.780847 21.193 0.822836 20.8125 0.899283C20.5368 0.941524 20.2648 1.00116 19.9984 1.07775C19.5879 1.19163 19.1902 1.34009 18.8105 1.52119C18.7078 1.56751 18.6051 1.62064 18.5024 1.67309C18.3703 1.74121 18.2457 1.80524 18.1286 1.87744C18.0327 1.93057 17.9376 1.99665 17.85 2.05591C17.7443 2.12307 17.6435 2.19609 17.5479 2.27456C17.5192 2.30113 17.4897 2.32088 17.4603 2.34745C17.354 2.43303 17.2531 2.524 17.1582 2.61991C17.0941 2.67049 17.0372 2.72817 16.9891 2.79157C16.9332 2.84246 16.8827 2.89787 16.838 2.95709C16.7625 3.03679 16.6991 3.11581 16.6334 3.20163C16.4046 3.48182 16.2102 3.78352 16.0534 4.10146V4.10827C16.0466 4.12121 16.0391 4.12802 16.0391 4.14096C15.9802 4.26017 15.922 4.37937 15.8707 4.49858C15.8261 4.60416 15.7823 4.71656 15.7461 4.82895C15.7098 4.94134 15.6706 5.0476 15.6434 5.15318C15.5471 5.46314 15.4784 5.77952 15.438 6.09933C15.401 6.3173 15.3202 6.52914 15.262 6.74712C15.0634 6.7008 14.8655 6.65448 14.6752 6.62178C14.389 6.56865 14.1028 6.52914 13.8242 6.50258C13.5482 6.47644 13.271 6.46326 12.9935 6.46307C12.4956 6.46049 11.9989 6.50617 11.5119 6.59931C11.4152 6.61256 11.3198 6.63237 11.2264 6.65857C11.1509 6.67151 11.0754 6.69194 11.0059 6.7117C10.9032 6.73826 10.8012 6.76415 10.7038 6.79752C10.6064 6.8309 10.4984 6.86564 10.4018 6.89698C10.3542 6.91154 10.3077 6.92906 10.2628 6.94942C10.1337 6.99577 10.0076 7.04877 9.88523 7.10814C9.75308 7.16808 9.62847 7.22734 9.50765 7.29342C9.46385 7.31317 9.4276 7.33361 9.38304 7.35336C9.34961 7.37078 9.31779 7.39059 9.28789 7.41262C9.14139 7.49232 9.00168 7.58496 8.86273 7.67759C8.65105 7.82291 8.44931 7.97964 8.2586 8.14692C8.134 8.25931 8.00864 8.37171 7.89914 8.48751C7.80399 8.58696 7.71564 8.68573 7.62728 8.79199L7.61293 8.80493C7.47398 8.9775 7.34208 9.15619 7.21722 9.34101C7.17267 9.40913 7.12887 9.47316 7.09262 9.53923C7.0171 9.65843 6.95292 9.78377 6.88722 9.90979C6.8117 10.0617 6.73619 10.2136 6.67426 10.373C6.63726 10.4786 6.59874 10.5773 6.564 10.6768C6.54966 10.7367 6.52776 10.796 6.51266 10.8552C6.44938 11.0596 6.40044 11.2673 6.36615 11.4772C6.36615 11.4908 6.3586 11.5037 6.3586 11.5167C6.3367 11.6529 6.32236 11.7891 6.30801 11.9206C6.29291 12.0991 6.28535 12.2843 6.28535 12.4696C6.2929 12.6944 6.30801 12.9192 6.33671 13.144C6.33671 13.1576 6.34426 13.1774 6.34426 13.1903C6.36616 13.3429 6.40316 13.5016 6.43941 13.6535C6.43941 13.6664 6.44696 13.6801 6.44696 13.693C6.48396 13.8517 6.53531 14.0043 6.58666 14.163C6.66127 14.403 6.75672 14.6374 6.87212 14.8639V14.8707C6.89402 14.9102 6.90912 14.9498 6.93102 14.9899C6.60155 15.0515 6.27587 15.1286 5.95534 15.2209H5.94855C5.78196 15.2617 5.61787 15.3103 5.45694 15.3666C5.33233 15.4061 5.20773 15.4525 5.09068 15.4926C4.97363 15.5328 4.86413 15.5785 4.75312 15.6289C4.6776 15.6548 4.60662 15.6881 4.53337 15.7208C4.09392 15.9138 3.68041 16.1514 3.30094 16.4293C3.29338 16.4354 3.27903 16.4422 3.27148 16.449C3.16136 16.5274 3.05623 16.6113 2.95658 16.7004C2.93261 16.7159 2.91036 16.7334 2.89013 16.7528C2.81461 16.8128 2.75117 16.872 2.68472 16.9381L2.64092 16.9783C2.58957 17.0307 2.53822 17.0839 2.49442 17.137C2.43785 17.1895 2.38725 17.247 2.34339 17.3086C2.3004 17.3482 2.26333 17.3926 2.23313 17.4408C2.15329 17.5338 2.0799 17.6312 2.01338 17.7323C1.92556 17.8563 1.84489 17.9843 1.77172 18.1158C1.69187 18.2439 1.62076 18.3763 1.55877 18.5123C1.52308 18.5806 1.49353 18.6515 1.47041 18.7241C1.41334 18.8418 1.36687 18.9634 1.33147 19.0879C1.28012 19.2404 1.22877 19.3923 1.19176 19.5511C1.15501 19.6859 1.12577 19.8223 1.10416 19.9598V19.9727C1.09661 19.9931 1.0966 20.0129 1.08905 20.0408C1.06715 20.177 1.04526 20.3249 1.03846 20.4706V20.4774C1.02968 20.5121 1.02461 20.5475 1.02335 20.583C0.987792 20.9618 0.992856 21.3427 1.03846 21.7206V21.7274C1.05203 21.8985 1.07725 22.0686 1.11398 22.2369V22.243C1.17238 22.5313 1.25803 22.8146 1.36998 23.0897C1.49987 23.4233 1.66978 23.7431 1.87669 24.0434C2.11255 24.39 2.39317 24.7101 2.71266 24.997C2.98226 25.2439 3.2768 25.4676 3.59243 25.6652C4.32674 26.1223 5.13928 26.4675 5.99763 26.687C6.35986 26.7816 6.73094 26.8462 7.10622 26.8798C7.26782 26.8927 7.42868 26.9063 7.59028 26.9063C7.97896 26.9122 8.36724 26.8812 8.7487 26.8137C8.93239 26.7818 9.11372 26.7397 9.29166 26.6877C9.55927 26.6174 9.82139 26.5312 10.0763 26.4295C10.5217 26.2438 10.9465 26.0203 11.345 25.762C11.5963 25.6038 11.8361 25.4313 12.0631 25.2456C12.4271 24.9642 12.7701 24.6616 13.0901 24.3397C13.4827 24.5573 13.8892 24.7538 14.3075 24.9282C14.6473 25.0714 14.9978 25.193 15.3564 25.2919C15.5324 25.3451 15.7083 25.3914 15.8767 25.4282C16.2071 25.5004 16.5427 25.5514 16.8811 25.5808H16.8886C17.1349 25.6014 17.3825 25.6057 17.6294 25.5937C17.9523 25.5872 18.2739 25.5539 18.59 25.4943H18.5976C18.7865 25.4646 18.9727 25.4227 19.1549 25.3689C19.5243 25.2686 19.8827 25.1379 20.2257 24.9786C21.027 24.5937 21.7568 24.0982 22.3885 23.51C22.4041 23.523 22.4213 23.5342 22.4399 23.5434C22.5796 23.649 22.6891 23.7287 22.7918 23.8159C22.9096 23.9085 23.0183 24.0073 23.1369 24.1067H23.1437C23.1712 24.1328 23.2007 24.1572 23.232 24.1796C23.5645 24.4275 23.9202 24.6488 24.2953 24.841C24.6018 25.0088 24.9261 25.1484 25.2634 25.2579C25.4243 25.3171 25.5934 25.3635 25.7618 25.4098C26.0921 25.4969 26.431 25.5546 26.7737 25.5821H26.7813C27.0294 25.6082 27.2795 25.6148 27.5289 25.6019C27.8465 25.5933 28.1629 25.5623 28.4751 25.5092H28.4827C28.673 25.4759 28.8641 25.4364 29.0544 25.39C29.2834 25.3357 29.5088 25.2695 29.7295 25.1918C29.8741 25.1456 30.016 25.0926 30.1546 25.0331C32.2812 24.1728 33.5574 22.6252 33.8942 20.4693C33.9826 19.8876 34.2393 19.5231 34.7596 19.1798C36.9964 17.6915 37.9789 15.0983 37.1286 12.7434C36.8311 11.894 36.5229 11.1447 37.2049 10.3546Z"
              stroke="#677580"
              stroke-width="0.41019"
              stroke-miterlimit="10"
            />
            <path
              d="M12.1373 17.0537V13.22H13.7252C14.1385 13.22 14.4575 13.3233 14.6823 13.5299C14.907 13.7329 15.0194 14.0193 15.0194 14.3891C15.0194 14.7625 14.907 15.0525 14.6823 15.2592C14.4575 15.4622 14.1385 15.5637 13.7252 15.5637H12.7029V17.0537H12.1373ZM12.7029 15.1124H13.6436C14.1947 15.1124 14.4702 14.8713 14.4702 14.3891C14.4702 13.9106 14.1947 13.6713 13.6436 13.6713H12.7029V15.1124ZM15.6372 17.0537V13.22H16.1103L17.5296 15.8682L18.9435 13.22H19.4057V17.0537H18.9V14.2423L17.6982 16.4664H17.3556L16.1484 14.2532V17.0537H15.6372ZM20.3265 17.0537V16.635L21.6044 15.2646C21.782 15.0725 21.9089 14.8985 21.9851 14.7426C22.0648 14.5867 22.1047 14.429 22.1047 14.2695C22.1047 13.8562 21.8618 13.6496 21.376 13.6496C21.0062 13.6496 20.6745 13.7891 20.3809 14.0683L20.1797 13.6387C20.3247 13.4973 20.5096 13.3849 20.7343 13.3015C20.9591 13.2145 21.1929 13.171 21.4358 13.171C21.831 13.171 22.1337 13.2617 22.344 13.4429C22.5578 13.6242 22.6648 13.8834 22.6648 14.2205C22.6648 14.4489 22.6086 14.6719 22.4962 14.8894C22.3875 15.1069 22.2153 15.3389 21.9796 15.5855L21.0334 16.5806H22.8171V17.0537H20.3265ZM23.4457 17.0537V16.4066H24.0929V17.0537H23.4457ZM26.1065 17.1027C25.86 17.1027 25.6208 17.0646 25.3887 16.9885C25.1603 16.9087 24.97 16.7981 24.8178 16.6567L25.0081 16.2217C25.3416 16.49 25.7041 16.6241 26.0957 16.6241C26.3458 16.6241 26.5416 16.557 26.683 16.4229C26.8244 16.2851 26.895 16.1057 26.895 15.8846C26.895 15.6562 26.828 15.4695 26.6938 15.3244C26.5597 15.1794 26.373 15.1069 26.1337 15.1069C25.7966 15.1069 25.5265 15.2465 25.3235 15.5256H24.9319V13.22H27.2159V13.6931H25.4812V14.9057C25.6842 14.7281 25.9416 14.6393 26.2534 14.6393C26.4963 14.6393 26.7065 14.69 26.8842 14.7915C27.0618 14.893 27.1996 15.0362 27.2975 15.2211C27.3953 15.4024 27.4443 15.6145 27.4443 15.8574C27.4443 16.1039 27.3899 16.3214 27.2811 16.5099C27.1724 16.6948 27.0183 16.8398 26.8189 16.945C26.6195 17.0501 26.3821 17.1027 26.1065 17.1027Z"
              fill="#677580"
            />
          </svg>
        </i>
        <div className="name">{props.name}</div>
        <div className="measure flex justify-end items-end grow">
          <span className="font-bold text-[#31343D] text-[18px]">
            {props.value}
          </span>
          <span className="text-[9px] pb-0.5 pl-1">
            {props.unit}
            <sup></sup>
          </span>
        </div>
        <div className="link">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.1523L6.08481 6.06753L1 0.982715"
              stroke="#31343D"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-6 items-center px-4 py-2 bg-[#EFEFFF]">
        <span>Avg</span>
        <div className="datas flex items-center gap-7 justify-between grow">
          <div className="data flex flex-col justify-center">
            <div className="time text-[10px]">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
          <div className="data flex flex-col justify-center">
            <div className="time">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
          <div className="data flex flex-col justify-center">
            <div className="time">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
          <div className="data flex flex-col justify-center">
            <div className="time">1hr</div>
            <div className="value text-[#31343D] font-semibold">20</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pollutants;
