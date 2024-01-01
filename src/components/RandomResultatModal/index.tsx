import {
	Box,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Text,
	useStyleConfig,
} from "@chakra-ui/react";

import { FC } from "react";
import { TypeResultat } from "src/features/randomGenerator/types";
import { useTranslation } from "react-i18next";

interface RandomResultatModalProps {
	isOpen: boolean;
	onClose: () => void;
	handlerRandom: () => void;
	listNumberRandom: (number | string | undefined)[];
	typeResultat?: TypeResultat;
}
const RandomResultatModal: FC<RandomResultatModalProps> = ({
	isOpen,
	onClose,
	listNumberRandom,
	handlerRandom,
	typeResultat,
}) => {
	const { t } = useTranslation();
	const boxStyles = useStyleConfig("Box", { variant: "button" });
	return (
		<Modal isCentered size='full' isOpen={isOpen} onClose={onClose}>
			<ModalContent bgGradient='linear(to-r, purple.300, blue.300)'>
				<ModalHeader>
					<ModalCloseButton />
				</ModalHeader>
				<ModalBody>
					<Text
						my='45%'
						fontSize={
							typeResultat === TypeResultat.STRING ? [32, 80] : [120, 180]
						}
						textAlign='center'
						color='white'
						fontWeight='bold'
						fontFamily='sans-serif'>
						{listNumberRandom.at(-1)}
					</Text>
				</ModalBody>

				<ModalFooter justifyContent='center' alignItems='center'>
					<Box onClick={handlerRandom} __css={boxStyles} as='button'>
						{t("generateMore")}
					</Box>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default RandomResultatModal;
