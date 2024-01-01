import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	IconButton,
	useDisclosure,
} from "@chakra-ui/react";
import { ReactElement, useCallback } from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HeaderMenuProps {
	children?: ReactElement;
}
const HeaderMenu = ({ children }: HeaderMenuProps) => {
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
						{children}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
export default HeaderMenu;
