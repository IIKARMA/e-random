import { Box, Image } from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";

import Icons from "src/assets/index";

interface ScreenProps {
	children: ReactElement;
}
const Screen: FC<ScreenProps> = ({ children }) => {
	return (
		<Box
			overflow='hidden'
			overflowY='scroll'
			bgGradient='linear(purple.100 0%, blue.100 25%, blue.200 50%)'
			style={{
				height: "100vh",
				minWidth: 375,
				justifyContent: "center",
			}}>
			{children}
			{/* <Image
				position='absolute'
				bottom={220}
				left={120}
				style={{ rotate: "22 .5 42  -5deg" }}
				zIndex={1}
				width={420}
				src={Icons.speacker}
			/>
			<Image
				zIndex={0}
				position='absolute'
				bottom={-20}
				left={20}
				width={420}
				src={Icons.trophy}
			/>
			<Image
				zIndex={0}
				position='absolute'
				bottom={100}
				right={20}
				width={420}
				src={Icons.gitft3d}
			/> */}
		</Box>
	);
};
export default Screen;
