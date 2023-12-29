import {
	Box,
	Center,
	HStack,
	Heading,
	VStack,
	Textarea,
	Text,
	Image,
	useBoolean,
	useDisclosure,
	useToast,
	useStyleConfig,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RandomResultat from "src/components/RandomResultat";

import { readString } from "react-papaparse";
import { useResizeScreen } from "src/hooks/useResizeScreen";
import { onRandomNumber } from "src/utilities/onRandomNumber";
import RandomResultatModal from "src/components/RandomResultatModal";
import { isCsv } from "src/utilities/isCsv";
import { TypeResultat } from "src/features/randomGenerator/types";
import Description from "src/components/Description";

const ListRandomGenerator = () => {
	const styles = useStyleConfig("Box", { variant: "button" });
	const hstackStyles = useStyleConfig("HStack", { variant: "conteiner" });

	const [hiddenResultaBox, setHiddenResultaBox] = useBoolean();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const [file, setFile] = useState(null);
	const [fileString, setFileString] = useState("");
	const [listResultat, setListResultat] = useState<string[]>([""]);
	const { screenWidth } = useResizeScreen();
	const fileReader = new FileReader();
	const handlerOnUpload = (e: any) => {
		setFile(e.target?.files[0]);
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
		setListResultat((prev) => [...prev, fileString.split("\n")[rendomNumber]]);
		onOpen();
	};
	const { t } = useTranslation();
	useEffect(() => {
		file && handlerReadFile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [file]);

	useEffect(() => {
		if (screenWidth < 380) setHiddenResultaBox.on();
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
								<HStack
									width={["100%", "100%"]}
									bg='#fffff08f'
									borderRadius='0.5rem'
									borderWidth={1}
									alignItems='center'
									justifyContent='center'
									py={1}
									px={5}>
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
						<Box mb={hiddenResultaBox ? 0 : 5} __css={styles} as='button'>
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
