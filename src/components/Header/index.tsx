import {
	Breadcrumb,
	HStack,
	Image,
	Text,
	BreadcrumbItem,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeaderMenu from "src/components/HeaderMenu";
import { useResizeScreen } from "src/hooks/useResizeScreen";

const Header = () => {
	const { t } = useTranslation("translation");
	const { screenWidth } = useResizeScreen();
	return (
		<Breadcrumb
			separator={""}
			alignItems='center'
			flexDirection='row'
			display='flex'
			width='100%'
			paddingRight='20px'
			backgroundBlendMode='32'
			h='72px'>
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
				{screenWidth > 450 ? (
					<HStack spacing={5}>
						<BreadcrumbItem>
							<Link to='/number'>
								<Text>{t("navigation.home")}</Text>
							</Link>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<Link to='/app'>
								<Text>{t("navigation.reviews")}</Text>
							</Link>
						</BreadcrumbItem>
					</HStack>
				) : (
					<HeaderMenu />
				)}
			</HStack>
		</Breadcrumb>
	);
};
export default Header;
