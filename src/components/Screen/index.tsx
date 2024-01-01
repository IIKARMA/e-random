import React, { FC, ReactElement } from "react";

import { Box } from "@chakra-ui/react";

interface ScreenProps {
	children: ReactElement;
}
const Screen: FC<ScreenProps> = ({ children }) => {
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
