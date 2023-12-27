import { LinkBox, Button, VStack, HStack, Image } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface RadioButtomProps {
	onChange?: (event: ChangeEvent) => void;
	isChecked?: boolean;
	children?: any;
	img?: string;
	path?: string;
}
const RadioButton: FC<RadioButtomProps> = ({
	onChange,
	isChecked,
	children,
	img,
	path,
}) => {
	const { t } = useTranslation();
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
			onClick={() => {
				onChange && onChange(children);
			}}>
			<Link to={path ? path : ""}>
				<HStack spacing={15}>
					<VStack spacing='70px' alignItems='flex-start'>
						<h1>{children}</h1>
						<Button style={{ color: "#fff", background: "#48cae4" }}>
							{t("go")}
						</Button>
					</VStack>
					<Image src={require("src/assets/" + img)} w='120px' />
				</HStack>
			</Link>
		</LinkBox>
	);
};
export default RadioButton;
