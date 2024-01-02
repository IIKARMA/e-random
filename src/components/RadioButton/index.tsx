import {
	Box,
	HStack,
	Image,
	LinkBox,
	Text,
	VStack,
	useStyleConfig,
} from "@chakra-ui/react";

import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { zindexs } from "src/consts/index";

interface RadioButtomProps {
	isChecked?: boolean;
	children?: any;
	img?: string;
	path?: string;
}
const RadioButton: FC<RadioButtomProps> = ({
	isChecked,
	children,
	img,
	path,
}) => {
	const { t } = useTranslation();
	const styles = useStyleConfig("Box", { variant: "buttonCard" });

	return (
		<LinkBox
			aria-checked={isChecked}
			_checked={{
				bg: "teal.600",
				color: "white",
				borderColor: "teal.600",
			}}
			borderColor='teal.600'
			_focus={{
				boxShadow: "outline",
			}}
			borderRadius={16}
			h='220'
			bg='#cdb4d09b'
			px={5}
			py={3}
			width={[350, 350, 380]}
			as='button'
			boxShadow='xl'>
			<Link to={path ? path : ""}>
				<HStack spacing={15} position='relative'>
					<VStack spacing='70px' alignItems='flex-start'>
						<Text
							textAlign='left'
							width={220}
							textColor='#fff'
							lineHeight='32px'
							fontSize='26px'
							fontWeight='extrabold'>
							{children}
						</Text>
						<Box as='button' __css={styles}>
							{t("go")}
						</Box>
					</VStack>
					<Image
						zIndex={zindexs.button}
						style={{ rotate: "2 .6 -32  25deg" }}
						position='absolute'
						top={5}
						right={-10}
						src={require("src/assets/" + img)}
						w='150px'
					/>
				</HStack>
			</Link>
		</LinkBox>
	);
};
export default RadioButton;
