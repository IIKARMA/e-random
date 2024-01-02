import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

import Icons from "src/assets/index";
import { TypeResultat } from "src/features/randomGenerator/types";

interface RandomNuberProps {
	listNumberRandom: (number | string | undefined)[];
	startRandom: boolean;
	typeResultat?: TypeResultat;
}
const RandomResultat: FC<RandomNuberProps> = ({
	startRandom,
	listNumberRandom,
	typeResultat,
}) => {
	return (
		<Box
			justifyContent='center'
			alignItems='center'
			bgGradient='linear(to-r, purple.300, blue.300)'
			borderRadius='1.2rem'
			w={[280, 280, 500]}
			position='relative'
			display='flex'
			height={[280, 310, 330]}>
			<Box>
				<Image
					width='140px'
					height='140px'
					right={-10}
					bottom={-10}
					style={{ rotate: "2 .6 -32  25deg" }}
					position='absolute'
					src={Icons.trophy}
				/>
				<Image
					width='140px'
					height='140px'
					right={-20}
					bottom={30}
					style={{ rotate: "2 .6  32  25deg" }}
					position='absolute'
					src={Icons.gitft3d}
				/>
				{startRandom ? (
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.200'
						color='blue.500'
						size='xl'
					/>
				) : (
					<Text
						fontSize={
							typeResultat === TypeResultat.STRING ? [18, 24] : [60, 100]
						}
						textAlign='center'
						color='white'
						fontWeight='bold'
						fontFamily='sans-serif'>
						{listNumberRandom.at(-1)}
					</Text>
				)}
			</Box>
		</Box>
	);
};
export default memo(RandomResultat);
