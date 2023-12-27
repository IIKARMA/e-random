import {
	Breadcrumb,
	Text,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
	const { t } = useTranslation("translation");
	return (
		<Breadcrumb
			separator={""}
			alignItems='center'
			flexDirection='row'
			display='flex'
			paddingRight='20px'
			justifyContent='flex-end'
			backgroundBlendMode='100'
			h='80px'>
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
		</Breadcrumb>
	);
};
export default Header;
