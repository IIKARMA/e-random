import { Center, Image, Text, VStack } from "@chakra-ui/react";

import Icon from "src/assets/index";
import { useResizeScreen } from "src/hooks/useResizeScreen";

const Description = ({ description }: any & string[]) => {
	const screenWidth = useResizeScreen();
	return (
		<Center width='100%' mt={"2rem"} pb='5px' display='flex'>
			{screenWidth && (
				<Image width='240px' height='240px' src={Icon.gift3d_2} />
			)}
			<VStack height='300%' w={["100%", "50%", "40%"]}>
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
