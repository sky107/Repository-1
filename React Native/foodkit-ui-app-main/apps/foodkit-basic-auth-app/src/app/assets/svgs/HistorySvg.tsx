import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants/colors";
const HistorySvg = (props) => (
  <Svg
    width={26}
    height={23}
    viewBox="0 0 26 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.7084 0.625C11.8241 0.625 9.05805 1.77076 7.01859 3.81021C4.97913 5.84967 3.83337 8.61577 3.83337 11.5H0.208374L4.90879 16.2004L4.99337 16.3696L9.87504 11.5H6.25004C6.25004 6.82375 10.0321 3.04167 14.7084 3.04167C19.3846 3.04167 23.1667 6.82375 23.1667 11.5C23.1667 16.1763 19.3846 19.9583 14.7084 19.9583C12.3763 19.9583 10.2617 19.0038 8.73921 17.4692L7.02337 19.185C8.03042 20.1976 9.22796 21.0008 10.547 21.5483C11.8659 22.0958 13.2803 22.3768 14.7084 22.375C17.5926 22.375 20.3587 21.2292 22.3982 19.1898C24.4376 17.1503 25.5834 14.3842 25.5834 11.5C25.5834 8.61577 24.4376 5.84967 22.3982 3.81021C20.3587 1.77076 17.5926 0.625 14.7084 0.625ZM13.5 6.66667V12.7083L18.6355 15.7533L19.5659 14.1946L15.3125 11.6692V6.66667H13.5Z"
      fill={props?.focused ? colors.primary : "#ADADAF"}
    />
  </Svg>
);
export default HistorySvg;
