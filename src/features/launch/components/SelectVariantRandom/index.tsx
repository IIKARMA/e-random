import { HStack, Center, Heading, Box } from "@chakra-ui/react";
import { RandomVariants } from "src/features/launch/enums";
import RadioButton from "src/components/RadioButton";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
const SelectVariantRandom = () => {
	const { t } = useTranslation();
	const variants = [RandomVariants.List, RandomVariants.Number];
	const [selectedVariant, setSelectedVariant] = useState<string>(
		RandomVariants.Number,
	);
	const handlerSelect = useCallback((event: any) => {
		setSelectedVariant(event);
	}, []);

	return (
		<>
			<Heading
				textAlign='center'
				color='#fff'
				size='lg'
				fontSize={["18px", "50px"]}>
				{t("selectRandomizer")}
			</Heading>
			<Center>
				<HStack
					wrap='wrap'
					width={{ base: "100%", sm: "100%", md: "100%" }}
					spacing='5'
					alignSelf='center'
					flex={3}
					w='85%'
					justify='center'
					justifyContent='space-around'
					borderRadius='1.5rem'
					marginY='5%'>
					{variants.map((variable) => {
						return (
							<RadioButton key={variable.toString()} onChange={handlerSelect}>
								{t(variable)}
							</RadioButton>
						);
					})}
				</HStack>
			</Center>
		</>
	);
};
export default SelectVariantRandom;
