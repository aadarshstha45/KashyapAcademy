/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import React from "react";

interface HTMLDivProps extends React.HTMLAttributes<HTMLDivElement> {
  data: string;
  textColor?: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  display?: string;
  noOfLines?: number;
  displayButton?: boolean;
  rest?: any;
}
export const CKEditor: React.FC<HTMLDivProps> = ({
  data,
  textColor,
  noOfLines,
  ...rest
}) => {
  return (
    <Box>
      <Box
        noOfLines={noOfLines ? noOfLines : undefined}
        dangerouslySetInnerHTML={{ __html: data }}
        textColor={textColor}
        {...rest}
      />
    </Box>
  );
};
