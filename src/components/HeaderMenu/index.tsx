import { HamburgerIcon } from "@chakra-ui/icons";
import {
	IconButton,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Drawer,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const HeaderMenu = () => {
	const { t } = useTranslation();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const naviagate = useNavigate();
	const handleClick = useCallback(() => {
		onOpen();
	}, [onOpen]);
	const hanldeNavigate = useCallback(
		(path: string) => {
			naviagate(path);
			onClose();
		},
		[onClose, naviagate],
	);
	return (
		<>
			<IconButton
				aria-label='Hamburger menu'
				onClick={handleClick}
				icon={<HamburgerIcon />}
			/>
			<Drawer onClose={onClose} isOpen={isOpen} size='full'>
				<DrawerOverlay />
				<DrawerContent bgGradient='linear(purple.100 0%, blue.100 25%, blue.200 50%)'>
					<DrawerHeader>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>
						<Box
							background='#fefef04e'
							borderRadius='1.2rem'
							my='10px'
							py='5'
							px='10px'
							textAlign='center'
							color='#33333093'
							boxShadow='xl'
							fontWeight='bold'
							fontSize='18px'
							onClick={() => {
								hanldeNavigate("number");
							}}>
							{t("numberRandomizer")}
						</Box>
						<Box
							background='#fefef04e'
							borderRadius='1.2rem'
							my='10px'
							py='5'
							px='10px'
							textAlign='center'
							color='#33333093'
							boxShadow='xl'
							fontWeight='bold'
							fontSize='18px'
							onClick={() => {
								hanldeNavigate("list");
							}}>
							{t("listRandomizer")}
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
export default HeaderMenu;
