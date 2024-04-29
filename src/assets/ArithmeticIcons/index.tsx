/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

export const AddIcon = (props: any) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
          fill="#FF4900"
        />
      </svg>
    </Icon>
  );
};

export const MinusIcon = (props: any) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 12.998H5V10.998H19V12.998Z" fill="#FF4900" />
      </svg>
    </Icon>
  );
};
