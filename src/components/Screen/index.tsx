import { Box } from "@chakra-ui/react";
import React from "react";
const Screen = ({ children }: any) => {
	return (
		<Box
			overflowY='hidden'
			overflow='hidden'
			bgGradient='linear(blue.200 0%, blue.100 25%, purple.100 50%)'
			style={{
				minWidth: 375,
				justifyContent: "center",
				paddingTop: 24,
				height: 1400,
			}}>
			{children}
		</Box>
	);
};
export default Screen;
