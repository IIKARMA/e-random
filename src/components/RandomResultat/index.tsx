import { Box, Spinner, Text } from "@chakra-ui/react";
import { memo } from "react";
interface RandomNuberProps {
	listNumberRandom: number[];
	startRandom: boolean;
}
const RandomResultat = ({
	startRandom,
	listNumberRandom,
}: RandomNuberProps) => {
	return (
		<Box
			justifyContent='center'
			alignItems='center'
			bgGradient='linear(to-r, purple.300, blue.300)'
			borderRadius='1.5rem'
			w={[280, 380]}
			display='flex'
			height={[280, 380]}>
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
					fontSize={[60, 100]}
					textAlign='center'
					color='white'
					fontWeight='bold'
					fontFamily='sans-serif'>
					{listNumberRandom.at(-1)}
				</Text>
			)}
		</Box>
	);
};
export default memo(RandomResultat);
