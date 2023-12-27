import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import TextField from "src/components/TextField";
import Screen from "src/components/Screen";
import { ChangeEvent, useCallback, useState } from "react";
import { RandomNumberGeneratorFormState } from "src/features/randomGenerator/types";
import { useTranslation } from "react-i18next";
import { useValidation } from "src/hooks/useValidation";
import RandomResultat from "src/components/RandomResultat";
import HistoryResultat from "src/components/HistoryResultat";

const ListRandomGenerator = () => {
	const { t } = useTranslation();
	return (
		<Box>
		<Heading
			pt={["0", "20"]}
			mt='0'
			fontSize={["24px", "36px"]}
			textAlign='center'
			pb='10'
			color='#fefef09e'>
			{t("numberRandomizer")}
		</Heading>
		<Center>
			<HStack
				wrap='wrap'
				w={["90%", "50%", "50%"]}
				spacing={10}
				alignSelf='center'
				justify='center'
				display='flex'
				pt={["10", "20"]}
				p='2rem'
				justifyContent='space-around'
				borderRadius='1.2rem'
				bg='#cdb4d09b'>
				<VStack alignSelf='flex-start' spacing={[5, 8]}>
					 

					<Box
						width={["90%", "100%"]}
						height={["50px", "60px"]}
						fontSize={["16px", "24px"]}
						color='white'
						fontWeight='bold'
						borderRadius='md'
						bgGradient='linear(to-r, purple.500, blue.500)'
						as='button'
						_hover={{
							bgGradient: "linear(to-r, blue.300, purple.300)",
							textColor: "#gray.300",
						}}
						style={{
							fontWeight: "600",
						}}>
						{t("generate")}
					</Box>
				</VStack>
			</HStack>
		</Center>
	</Box>
	);
};
export default ListRandomGenerator;
