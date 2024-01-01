import {
	Box,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useStyleConfig,
} from "@chakra-ui/react";

import { FC } from "react";
import Icons from "src/assets/index";
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
		<Modal size='full' isOpen={isOpen} onClose={onClose}>
			<ModalOverlay>
				<ModalContent bgGradient='linear(to-r, purple.300, blue.300)'>
					<ModalHeader>
						<ModalCloseButton />
					</ModalHeader>
					<ModalBody>
						<Image
							width='140px'
							height='140px'
							right={-10}
							bottom={0}
							style={{ rotate: "2 .6 12  25deg" }}
							position='absolute'
							src={Icons.trophy}
						/>
						<Image
							width='140px'
							height='140px'
							right={10}
							zIndex={0}
							bottom={10}
							style={{ rotate: "2 .6  12   25deg" }}
							position='absolute'
							src={Icons.gitft3d}
						/>
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
						<Box
							zIndex={111}
							onClick={handlerRandom}
							__css={boxStyles}
							as='button'>
							{t("generateMore")}
						</Box>
					</ModalFooter>
				</ModalContent>
			</ModalOverlay>
		</Modal>
	);
};
export default RandomResultatModal;
