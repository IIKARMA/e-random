import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Portal,
	Text,
} from "@chakra-ui/react";
import { FlagLanguages, FullLanguages, LANGUEAGE } from "src/i18n/enums";

import { ChevronDownIcon } from "@chakra-ui/icons";
import HeaderMenu from "src/components/HeaderMenu";
import ICON from "src/assets/index";
import { Link } from "react-router-dom";
import { useResizeScreen } from "src/hooks/useResizeScreen";
import { useTranslation } from "react-i18next";

export type Flag = keyof typeof FlagLanguages;
const Header = () => {
	const { t, i18n } = useTranslation("translation");
	const screenWidth = useResizeScreen();
	const onChangeLanguages = (lang: LANGUEAGE) => {
		return i18n.changeLanguage(lang);
	};
	const flag: Flag = i18n.language as Flag;
	return (
		<Breadcrumb
			separator={""}
			alignItems='center'
			flexDirection='row'
			display='flex'
			width='100%'
			bg='#4299e019'
			minWidth='100vw'
			paddingRight='20px'
			backgroundBlendMode='32'
			h='72px'
			mb={screenWidth ? "5rem" : "2rem"}>
			<HStack
				spacing={5}
				justifyContent='space-between'
				w={"100vw"}
				px='1.2rem'>
				<BreadcrumbItem>
					<Link to='/'>
						<HStack alignItems='center'>
							<Image height='48px' src={require("src/assets/gift.png")} />
							<Text
								textStyle='modal-header'
								bgGradient='linear(to-l, #7928C05A, #4299e199)'
								bgClip='text'
								lineHeight='24px'
								fontSize='24px'
								fontWeight='extrabold'>
								Gift Random
							</Text>
						</HStack>
					</Link>
				</BreadcrumbItem>

				{screenWidth ? (
					<HStack>
						<Menu>
							<MenuButton
								color='#7928C05A'
								fontSize='18px'
								borderRadius='1.5rem'
								fontFamily='sans-serif'
								as={Button}
								rightIcon={<ChevronDownIcon strokeWidth='32px' />}>
								<Text
									fontWeight='500'
									color='gray'
									lineHeight='24px'
									fontSize='16px'>
									{t("ramdozier")}
								</Text>
							</MenuButton>
							<Portal>
								<MenuList hidden={false}>
									<MenuItem>
										<Link to='number'>
											<Text>{t("numberRandomizer")}</Text>
										</Link>
									</MenuItem>
									<MenuDivider />
									<MenuItem>
										<Link to='list'>
											<Text>{t("listRandomizer")}</Text>
										</Link>
									</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
						<Menu>
							<MenuButton
								onMouseEnter={() => {}}
								background='rgb(203, 213, 224)'
								color='#7928C05A'
								fontSize='18px'
								borderRadius='1.5rem'
								fontFamily='sans-serif'
								as={Button}
								rightIcon={<ChevronDownIcon strokeWidth='32px' />}>
								<HStack>
									<Image
										height='22px'
										src={"" + FlagLanguages[flag.toUpperCase() as Flag]}
									/>
									<Text
										fontWeight='500'
										color='gray'
										lineHeight='24px'
										fontSize='16px'>
										{i18n.language.toUpperCase()}
									</Text>
								</HStack>
							</MenuButton>
							<Portal>
								<MenuList>
									<MenuItem
										onClick={() => {
											onChangeLanguages(LANGUEAGE.UK);
										}}>
										<HStack>
											<Image height='22px' src={"" + FlagLanguages.UA} />
											<Text>{FullLanguages.UA}</Text>
										</HStack>
									</MenuItem>
									<MenuDivider />
									<MenuItem
										onClick={() => {
											onChangeLanguages(LANGUEAGE.EN);
										}}>
										<HStack>
											<Image height='22px' src={"" + FlagLanguages.EN} />
											<Text>{FullLanguages.EN}</Text>
										</HStack>
									</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
					</HStack>
				) : (
					<HeaderMenu
						children={
							<Menu>
								<MenuButton
									boxShadow='xl'
									onMouseEnter={() => {}}
									background='#fefef04e'
									color='#7928C05A'
									fontSize='18px'
									borderRadius='1.2rem'
									my='10px'
									py='5'
									px='10px'
									fontFamily='sans-serif'
									as={Button}
									paddingY={"2"}
									rightIcon={<ChevronDownIcon strokeWidth='32px' />}>
									<HStack alignSelf='flex-end'>
										<Image
											height='22px'
											src={"" + "" + FlagLanguages[flag.toUpperCase() as Flag]}
										/>
										<Text
											fontWeight='500'
											color='gray'
											lineHeight='24px'
											fontSize='18px'>
											{i18n.language.toUpperCase()}
										</Text>
									</HStack>
								</MenuButton>
								<MenuList boxShadow='xl' background='#fefef04e'>
									<MenuItem
										background='#fefef0e'
										onClick={() => {
											onChangeLanguages(LANGUEAGE.UK);
										}}>
										<HStack>
											<Image height='22px' src={"" + FlagLanguages.UA} />
											<Text>{FullLanguages.UA}</Text>
										</HStack>
									</MenuItem>
									<MenuDivider />
									<MenuItem
										background='#fefef0e'
										onClick={() => {
											onChangeLanguages(LANGUEAGE.EN);
										}}>
										<HStack>
											<Image height='22px' src={"" + FlagLanguages.EN} />
											<Text>{FullLanguages.EN}</Text>
										</HStack>
									</MenuItem>
								</MenuList>
							</Menu>
						}
					/>
				)}
			</HStack>
		</Breadcrumb>
	);
};
export default Header;
