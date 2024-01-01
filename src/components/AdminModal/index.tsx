import {
	Box,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	useStyleConfig,
} from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";
interface AdminModalProps {
	handleInput: (value: (string | number)[]) => void;
	isOpen: boolean;
	onClose: () => void;
}
const AdminModal: FC<AdminModalProps> = ({ handleInput, isOpen, onClose }) => {
	const boxStyles = useStyleConfig("Box", { variant: "button" });
	const [text, setText] = useState("");
	const handleSubmit = useCallback(() => {
		handleInput(text.split(","));
		onClose();
	}, [handleInput, onClose, text]);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<ModalBody>
					<Input
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
				</ModalBody>
				<ModalFooter>
					<Box
						onClick={() => {
							handleSubmit();
						}}
						as='button'
						__css={boxStyles}>
						Готово
					</Box>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
export default AdminModal;
