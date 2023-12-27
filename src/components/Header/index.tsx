import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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
				<BreadcrumbLink href='/'>{t("navigation.home")}</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href='/app'>{t("navigation.reviews")}</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};
export default Header;
