import {
	Box,
	Center,
	HStack,
	Heading,
	Input,
	FormLabel,
	Textarea,
	VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import RandomResultat from "src/components/RandomResultat";
import TextField from "src/components/TextField";

const ListRandomGenerator = () => {
	const { t } = useTranslation();
	return (
		<>
			<Heading textAlign='center' pb='10' color='#fefef09e'>
				{t("listRandomizer")}
			</Heading>
			<Center>
				<HStack
					wrap='wrap'
					width={{ base: "100%", sm: "50%", md: "25%" }}
					spacing='10'
					alignSelf='center'
					flex={3}
					w='85%'
					justify='center'
					py='10'
					mx='10'
					px='20'
					pt='20'
					justifyContent='space-around'
					borderRadius='1.5rem'
					bg='#cdb4d09b'>
					<VStack alignSelf='flex-start' spacing='3.5rem'>
						<Textarea
							overflow='hidden'
							height={[320, 240]}
							aria-required={true}
							variant='filled'
							fontSize='32'
							lineHeight='48'
						/>
						<Input type='file' />
						<Box
							p={4}
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
								fontSize: 28,
								fontWeight: "600",
								alignSelf: "flex-start",
								width: "100%",
								height: "80px",
							}}>
							{t("generate")}
						</Box>
					</VStack>
					<RandomResultat startRandom={false} listNumberRandom={[0]} />
				</HStack>
			</Center>
		</>
	);
};
export default ListRandomGenerator;
