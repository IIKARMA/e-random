import { Box, Spinner, Text } from "@chakra-ui/react";
import { memo } from "react";
export enum TypeResultat {
	STRING = "string",
	NUBER = "number",
}
interface RandomNuberProps {
	listNumberRandom: (number | string)[];
	startRandom: boolean;
	type?: TypeResultat;
}
const RandomResultat = ({
	startRandom,
	listNumberRandom,
	type,
}: RandomNuberProps) => {
	return (
		<Box
			justifyContent='center'
			alignItems='center'
			bgGradient='linear(to-r, purple.300, blue.300)'
			borderRadius='1.2rem'
			w={[300, 280]}
			display='flex'
			height={[300, 280]}>
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
					fontSize={type === TypeResultat.STRING ? [18, 24] : [60, 100]}
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
