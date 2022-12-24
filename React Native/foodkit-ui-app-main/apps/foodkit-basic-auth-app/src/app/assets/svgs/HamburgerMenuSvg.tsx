import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HamburgerMenuSvg = (props) => (
  <Svg
    width={25}
    height={17}
    viewBox="0 0 25 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.59857 8.33333H13.5M1.59857 1H23.5986M1.59857 15.6667H23.5986"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HamburgerMenuSvg;
