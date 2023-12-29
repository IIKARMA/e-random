import { Center, Text, VStack } from "@chakra-ui/react";
const Description = ({ description }: any & string[]) => {
	return (
		<Center mt='2rem' px={5}>
			<VStack w={["100%", "50%", "50%"]}>
				<Text
					fontWeight='bold'
					color='white'
					fontSize={[14, 25]}
					textAlign='left'
					lineHeight='150%'>
					{description[0]}
				</Text>
				<Text
					color='white'
					fontSize={[14, 25]}
					textAlign='left'
					lineHeight='150%'>
					{description[1]}
				</Text>
			</VStack>
		</Center>
	);
};
export default Description;
