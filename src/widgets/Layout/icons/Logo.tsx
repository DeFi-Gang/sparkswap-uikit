import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Logo: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg width="187" height="18" viewBox="0 0 187 18" fill="none" {...props}>
      <path
        d="M3.81222 18C3.22022 18 2.67622 17.856 2.18022 17.568C1.70022 17.28 1.31622 16.888 1.02822 16.392C0.740219 15.896 0.596219 15.352 0.596219 14.76V13.608H3.47622V14.664C3.47622 14.792 3.51622 14.896 3.59622 14.976C3.67622 15.056 3.78022 15.096 3.90822 15.096H14.5162C14.6442 15.096 14.7482 15.056 14.8282 14.976C14.9242 14.896 14.9722 14.792 14.9722 14.664V11.232C14.9722 11.12 14.9242 11.024 14.8282 10.944C14.7482 10.848 14.6442 10.8 14.5162 10.8H3.81222C3.22022 10.8 2.67622 10.656 2.18022 10.368C1.70022 10.08 1.31622 9.696 1.02822 9.216C0.740219 8.72 0.596219 8.176 0.596219 7.584V3.96C0.596219 3.368 0.740219 2.824 1.02822 2.328C1.31622 1.832 1.70022 1.44 2.18022 1.152C2.67622 0.863999 3.22022 0.719999 3.81222 0.719999H14.6362C15.2282 0.719999 15.7642 0.863999 16.2442 1.152C16.7402 1.44 17.1322 1.832 17.4202 2.328C17.7242 2.824 17.8762 3.368 17.8762 3.96V5.112H14.9722V4.056C14.9722 3.928 14.9242 3.824 14.8282 3.744C14.7482 3.664 14.6442 3.624 14.5162 3.624H3.90822C3.78022 3.624 3.67622 3.664 3.59622 3.744C3.51622 3.824 3.47622 3.928 3.47622 4.056V7.488C3.47622 7.6 3.51622 7.704 3.59622 7.8C3.67622 7.88 3.78022 7.92 3.90822 7.92H14.6362C15.2282 7.92 15.7642 8.064 16.2442 8.352C16.7402 8.64 17.1322 9.032 17.4202 9.528C17.7242 10.008 17.8762 10.544 17.8762 11.136V14.76C17.8762 15.352 17.7242 15.896 17.4202 16.392C17.1322 16.888 16.7402 17.28 16.2442 17.568C15.7642 17.856 15.2282 18 14.6362 18H3.81222ZM20.9529 18V0.743999H34.9929C35.5849 0.743999 36.1209 0.895999 36.6009 1.2C37.0969 1.488 37.4889 1.88 37.7769 2.376C38.0809 2.856 38.2329 3.392 38.2329 3.984V8.736C38.2329 9.312 38.0809 9.848 37.7769 10.344C37.4889 10.84 37.0969 11.232 36.6009 11.52C36.1209 11.808 35.5849 11.952 34.9929 11.952L23.8329 11.976V18H20.9529ZM24.2649 9.048H34.8969C35.0089 9.048 35.1049 9.008 35.1849 8.928C35.2809 8.848 35.3289 8.744 35.3289 8.616V4.056C35.3289 3.944 35.2809 3.848 35.1849 3.768C35.1049 3.672 35.0089 3.624 34.8969 3.624H24.2649C24.1529 3.624 24.0489 3.672 23.9529 3.768C23.8729 3.848 23.8329 3.944 23.8329 4.056V8.616C23.8329 8.744 23.8729 8.848 23.9529 8.928C24.0489 9.008 24.1529 9.048 24.2649 9.048ZM40.5825 18V3.96C40.5825 3.368 40.7265 2.824 41.0145 2.328C41.3025 1.832 41.6945 1.44 42.1905 1.152C42.6865 0.863999 43.2305 0.719999 43.8225 0.719999H54.6225C55.2145 0.719999 55.7505 0.863999 56.2305 1.152C56.7265 1.44 57.1185 1.832 57.4065 2.328C57.7105 2.824 57.8625 3.368 57.8625 3.96V18H54.9585V12.072H43.4625V18H40.5825ZM43.4625 9.192H54.9585V4.056C54.9585 3.928 54.9105 3.824 54.8145 3.744C54.7345 3.664 54.6385 3.624 54.5265 3.624H43.8945C43.7825 3.624 43.6785 3.664 43.5825 3.744C43.5025 3.824 43.4625 3.928 43.4625 4.056V9.192ZM75.045 18L69.741 11.664H73.509L78.285 17.328V18H75.045ZM61.077 18V0.743999H75.117C75.709 0.743999 76.245 0.895999 76.725 1.2C77.221 1.488 77.613 1.88 77.901 2.376C78.205 2.856 78.357 3.392 78.357 3.984V8.736C78.357 9.312 78.205 9.848 77.901 10.344C77.613 10.84 77.221 11.232 76.725 11.52C76.245 11.808 75.709 11.952 75.117 11.952L63.957 11.976V18H61.077ZM64.389 9.048H75.021C75.133 9.048 75.229 9.008 75.309 8.928C75.405 8.848 75.453 8.744 75.453 8.616V4.056C75.453 3.944 75.405 3.848 75.309 3.768C75.229 3.672 75.133 3.624 75.021 3.624H64.389C64.277 3.624 64.173 3.672 64.077 3.768C63.997 3.848 63.957 3.944 63.957 4.056V8.616C63.957 8.744 63.997 8.848 64.077 8.928C64.173 9.008 64.277 9.048 64.389 9.048ZM81.3857 18V0.719999H84.2897V7.92H88.7057L94.7297 0.719999H97.9697V1.416L91.2977 9.36L97.9697 17.304V18H94.7297L88.7057 10.8H84.2897V18H81.3857ZM104.111 18C103.519 18 102.975 17.856 102.479 17.568C101.999 17.28 101.615 16.888 101.327 16.392C101.039 15.896 100.895 15.352 100.895 14.76V13.608H103.775V14.664C103.775 14.792 103.815 14.896 103.895 14.976C103.975 15.056 104.079 15.096 104.207 15.096H114.815C114.943 15.096 115.047 15.056 115.127 14.976C115.223 14.896 115.271 14.792 115.271 14.664V11.232C115.271 11.12 115.223 11.024 115.127 10.944C115.047 10.848 114.943 10.8 114.815 10.8H104.111C103.519 10.8 102.975 10.656 102.479 10.368C101.999 10.08 101.615 9.696 101.327 9.216C101.039 8.72 100.895 8.176 100.895 7.584V3.96C100.895 3.368 101.039 2.824 101.327 2.328C101.615 1.832 101.999 1.44 102.479 1.152C102.975 0.863999 103.519 0.719999 104.111 0.719999H114.935C115.527 0.719999 116.063 0.863999 116.543 1.152C117.039 1.44 117.431 1.832 117.719 2.328C118.023 2.824 118.175 3.368 118.175 3.96V5.112H115.271V4.056C115.271 3.928 115.223 3.824 115.127 3.744C115.047 3.664 114.943 3.624 114.815 3.624H104.207C104.079 3.624 103.975 3.664 103.895 3.744C103.815 3.824 103.775 3.928 103.775 4.056V7.488C103.775 7.6 103.815 7.704 103.895 7.8C103.975 7.88 104.079 7.92 104.207 7.92H114.935C115.527 7.92 116.063 8.064 116.543 8.352C117.039 8.64 117.431 9.032 117.719 9.528C118.023 10.008 118.175 10.544 118.175 11.136V14.76C118.175 15.352 118.023 15.896 117.719 16.392C117.431 16.888 117.039 17.28 116.543 17.568C116.063 17.856 115.527 18 114.935 18H104.111ZM126.332 18L120.044 0.719999H123.116L127.484 12.696L131.852 0.719999H134.78L139.172 12.696L143.54 0.719999H146.612L140.324 18H137.996L133.316 5.16L128.636 18H126.332ZM148.428 18V3.96C148.428 3.368 148.572 2.824 148.86 2.328C149.148 1.832 149.54 1.44 150.036 1.152C150.532 0.863999 151.076 0.719999 151.668 0.719999H162.468C163.06 0.719999 163.596 0.863999 164.076 1.152C164.572 1.44 164.964 1.832 165.252 2.328C165.556 2.824 165.708 3.368 165.708 3.96V18H162.804V12.072H151.308V18H148.428ZM151.308 9.192H162.804V4.056C162.804 3.928 162.756 3.824 162.66 3.744C162.58 3.664 162.484 3.624 162.372 3.624H151.74C151.628 3.624 151.524 3.664 151.428 3.744C151.348 3.824 151.308 3.928 151.308 4.056V9.192ZM168.922 18V0.743999H182.962C183.554 0.743999 184.09 0.895999 184.57 1.2C185.066 1.488 185.458 1.88 185.746 2.376C186.05 2.856 186.202 3.392 186.202 3.984V8.736C186.202 9.312 186.05 9.848 185.746 10.344C185.458 10.84 185.066 11.232 184.57 11.52C184.09 11.808 183.554 11.952 182.962 11.952L171.802 11.976V18H168.922ZM172.234 9.048H182.866C182.978 9.048 183.074 9.008 183.154 8.928C183.25 8.848 183.298 8.744 183.298 8.616V4.056C183.298 3.944 183.25 3.848 183.154 3.768C183.074 3.672 182.978 3.624 182.866 3.624H172.234C172.122 3.624 172.018 3.672 171.922 3.768C171.842 3.848 171.802 3.944 171.802 4.056V8.616C171.802 8.744 171.842 8.848 171.922 8.928C172.018 9.008 172.122 9.048 172.234 9.048Z"
        fill="#E9E9E9"
      />
    </Svg>
  );
};

export default Logo;
