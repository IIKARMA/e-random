import { Box } from "@chakra-ui/react";
import React from "react";
const Screen = ({ children }: any) => {
	return (
		<Box
			bgGradient='linear(blue.200 0%, blue.100 25%, purple.100 50%)'
			style={{
				alignItems: "center",
				minWidth: 375,
				display: "block",
				paddingTop: 240,
				height: 1400,
			}}>
			{children}
		</Box>
	);
};
export default Screen;
