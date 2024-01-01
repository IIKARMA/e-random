import { Center, HStack, Heading } from "@chakra-ui/react";

import { FC } from "react";
import RadioButton from "src/components/RadioButton";
import { RandomVariants } from "src/features/launch/enums";
import { useTranslation } from "react-i18next";

const SelectVariantRandom: FC = () => {
	const { t } = useTranslation();
	const variants = [
		{ type: RandomVariants.Number, img: "numbers.png", path: "number" },
		{ type: RandomVariants.List, img: "list.png", path: "list" },
	];

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
					alignSelf='center'
					flex={3}
					w='85%'
					spacing={"20"}
					justify='center'
					justifyContent='center'
					borderRadius='1.5rem'
					marginY='5%'>
					{variants.map((variable) => {
						return (
							<RadioButton
								path={variable.path}
								img={variable.img}
								key={variable.toString()}>
								{t(variable.type)}
							</RadioButton>
						);
					})}
				</HStack>
			</Center>
		</>
	);
};
export default SelectVariantRandom;
