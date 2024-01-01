import {
	Box,
	Center,
	HStack,
	Heading,
	Image,
	Text,
	Textarea,
	VStack,
	useBoolean,
	useDisclosure,
	useStyleConfig,
	useToast,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

import AdminModal from "src/components/AdminModal";
import Description from "src/components/Description";
import RandomResultat from "src/components/RandomResultat";
import RandomResultatModal from "src/components/RandomResultatModal";
import { TypeResultat } from "src/features/randomGenerator/types";
import env from "react-dotenv";
import { getInfoUser } from "src/api/userApi";
import { isCsv } from "src/utilities/isCsv";
import { onRandomNumber } from "src/utilities/onRandomNumber";
import { readString } from "react-papaparse";
import { useResizeScreen } from "src/hooks/useResizeScreen";
import { useTranslation } from "react-i18next";

const ListRandomGenerator = () => {
	const styles = useStyleConfig("Box", { variant: "button" });
	const hstackStyles = useStyleConfig("HStack", { variant: "conteiner" });
	const fileLabelStyles = useStyleConfig("HStack", { variant: "fileLabel" });

	const { t } = useTranslation();

	const {
		isOpen: isOpenAdminModal,
		onOpen: onOpenAdmin,
		onClose: onCloseAdmin,
	} = useDisclosure();
	const [hiddenResultaBox, setHiddenResultaBox] = useBoolean();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const [needResutat, setNeedResultat] = useState<(string | number)[]>([""]);

	const [file, setFile] = useState(null);
	const [fileString, setFileString] = useState("");
	const [listResultat, setListResultat] = useState<(string | undefined)[]>([
		"",
	]);
	const { screenWidth } = useResizeScreen();
	const fileReader = new FileReader();
	const handlerOnUpload = (e: any) => {
		setFile(e.target?.files[0]);
	};
	const needOneResult = useCallback(() => {
		const result: string = String(needResutat.pop());
		setNeedResultat((prev) => prev.filter((i) => i !== String(result)));
		return String(result);
	}, [needResutat]);
	const isAdmin = async () => {
		const user = await getInfoUser();
		console.log([env.API_ADMIN1].includes(String(user)));

		Boolean([env.API_ADMIN1].includes(String(user))) &&
			onOpenAdmin &&
			onOpenAdmin();
	};
	const handlerReadFile = () => {
		if (file) {
			fileReader.onload = function (event) {
				const csvOutput = event.target?.result;

				readString(String(csvOutput), {
					worker: true,

					complete: (results) => {
						const string = String(
							results.data.map((item: any) => item[0]).join("\n"),
						);
						isCsv(file)
							? setFileString(string)
							: toast({
									title: t("isNotCSV"),
									status: "error",
									duration: 3000,
									position: "top-right",
									isClosable: true,
							  });
					},
				});
			};
			fileReader.readAsText(file);
		}
	};
	const handlerOnSubmit = () => {
		const rendomNumber: number = onRandomNumber(
			1,
			fileString.split("\n").length - 1,
		);
		const needString: string = needOneResult();
		if (
			needResutat &&
			fileString.split("\n").find((i) => i === String(needString))
		)
			setListResultat((prev) => [
				...prev,
				fileString.split("\n").find((i) => i === String(needString)),
			]);
		else
			setListResultat((prev) => [
				...prev,
				fileString.split("\n")[rendomNumber],
			]);
		onOpen();
	};
	useEffect(() => {
		file && handlerReadFile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [file]);
	useEffect(() => {
		fileString.includes("1111") && Boolean(isAdmin());
	}, [fileString, isAdmin, onOpenAdmin]);

	useEffect(() => {
		if (screenWidth < 435) setHiddenResultaBox.on();
		else setHiddenResultaBox.off();
	}, [screenWidth, setHiddenResultaBox]);
	return (
		<Box>
			<Heading
				pt={["0", "20"]}
				mt='0'
				fontSize={["24px", "36px"]}
				textAlign='center'
				pb='10'
				color='#fefef09e'>
				{t("listRandomizer")}
			</Heading>
			<Center>
				<AdminModal
					isOpen={isOpenAdminModal}
					onClose={onCloseAdmin}
					handleInput={(e) => setNeedResultat(e)}
				/>
				<HStack
					alignItems={!hiddenResultaBox ? "baseline" : ""}
					__css={hstackStyles}>
					<VStack alignSelf='flex-start' spacing={hiddenResultaBox ? 3 : 5}>
						<VStack
							spacing={hiddenResultaBox ? 3 : 5}
							width={["100%", 400, 500]}>
							<Box
								color='purple.500,'
								alignItems='flex-start'
								height={[200, 180]}
								width={["90%", "100%"]}
								display='flex'
								pb='1rem'
								overflow='hidden'
								fontSize={["16", "24px"]}
								borderRadius='0.5rem'
								bg='#fff'>
								<Textarea
									onChange={(e) => setFileString(e.target.value)}
									placeholder={t("placeholderListRandom")}
									w={[320, 400, 500]}
									height={[220, 180]}
									fontSize={["16px", "18px"]}
									value={String(fileString)}
									focusBorderColor='#fff'
									resize='none'
									style={{ overflowY: "scroll", borderWidth: 0 }}
								/>
							</Box>
							<Box as='label' width={["90%", "100%"]} htmlFor='csvInput'>
								<HStack __css={fileLabelStyles}>
									<Text textAlign='center'>{t("uploadFile")}</Text>
									<Image height={38} src={require("src/assets/csv.png")} />
								</HStack>
							</Box>
						</VStack>

						<input
							onChange={handlerOnUpload}
							style={{ display: "none" }}
							id='csvInput'
							name='file'
							type='File'
						/>
						<></>
						<Box
							onClick={handlerOnSubmit}
							mb={hiddenResultaBox ? 0 : 5}
							__css={styles}
							as='button'>
							{t("generate")}
						</Box>
					</VStack>
					{!hiddenResultaBox ? (
						<RandomResultat
							typeResultat={TypeResultat.STRING}
							startRandom={false}
							listNumberRandom={listResultat}
						/>
					) : (
						<RandomResultatModal
							typeResultat={TypeResultat.STRING}
							onClose={onClose}
							isOpen={isOpen}
							listNumberRandom={listResultat}
							handlerRandom={handlerOnSubmit}
						/>
					)}
				</HStack>
			</Center>
			<Description
				description={[
					String(t("descriptionListRandom.header")),
					String(t("descriptionListRandom.body")),
				]}
			/>
		</Box>
	);
};
export default ListRandomGenerator;
