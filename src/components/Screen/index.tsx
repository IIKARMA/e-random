import { Box } from "@chakra-ui/react";
import React from "react";
const Screen = ({ children }: any) => {
	return (
		<Box
			overflowY='hidden'
			overflow='hidden'
			bgGradient='linear(purple.100 0%, blue.100 25%, blue.200 50%)'
			style={{
				height: "100vh",
				minWidth: 375,
				justifyContent: "center",
				paddingTop: 24,
			}}>
			{children}
		</Box>
	);
};
export default Screen;
