import {
	Box,
	Center,
	Icon,
	HStack,
	Heading,
	VStack,
	Textarea,
	Text,
	Container,
	Image,
} from "@chakra-ui/react";
import TextField from "src/components/TextField";
import Screen from "src/components/Screen";
import {
	ChangeEvent,
	ChangeEventHandler,
	MouseEventHandler,
	useCallback,
	useEffect,
	useState,
} from "react";
import { RandomNumberGeneratorFormState } from "src/features/randomGenerator/types";
import { useTranslation } from "react-i18next";
import { useValidation } from "src/hooks/useValidation";
import RandomResultat, { TypeResultat } from "src/components/RandomResultat";
import HistoryResultat from "src/components/HistoryResultat";
import { DownloadIcon } from "@chakra-ui/icons";
import { readString } from "react-papaparse";
import { useResizeScreen } from "src/hooks/useResizeScreen";
import { onRandomNumber } from "src/unilits/onRandomNumber";

const ListRandomGenerator = () => {
	const [file, setFile] = useState(null);
	const [fileString, setFileString] = useState("");
	const [listResultat, setListResultat] = useState<string[]>([""]);
	const { screenWidth } = useResizeScreen();
	const fileReader = new FileReader();
	const handlerOnUpload = (e: any) => {
		setFile(e.target?.files[0]);
	};
	const handlerReadFile = (e: any) => {
		if (file) {
			fileReader.onload = function (event) {
				const csvOutput = event.target?.result;

				readString(String(csvOutput), {
					worker: true,
					complete: (results) => {
						const string = String(
							results.data.map((item: any) => item[0]).join("\n"),
						);
						setFileString(string);
					},
				});
			};
			fileReader.readAsText(file);
		}
	};
	const handlerOnSubmit = () => {
		const rendomNumber: number = onRandomNumber(
			0,
			fileString.split("\n").length,
		);
		setListResultat((prev) => [...prev, fileString.split("\n")[rendomNumber]]);
	};
	const { t } = useTranslation();
	useEffect(() => {
		handlerReadFile(file);
	}, [file]);

	return (
		<Box>
			<Heading
				pt={["0", "20"]}
				mt='0'
				fontSize={["24px", "36px"]}
				textAlign='center'
				pb='10'
				color='#fefef09e'>
				{t("numberRandomizer")}
			</Heading>
			<Center>
				<HStack
					wrap='wrap'
					w={["90%", "50%", "50%"]}
					spacing={10}
					alignSelf='center'
					justify='center'
					display='flex'
					pt={["10", "20"]}
					p='2rem'
					justifyContent='space-around'
					borderRadius='1.2rem'
					bg='#cdb4d09b'>
					<VStack alignSelf='flex-start'>
						<>
							<Box
								color='purple.500,'
								alignItems='flex-start'
								height={[240, 180]}
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
									w={[320, 280]}
									height={[220, 180]}
									fontSize={["16px", "18px"]}
									value={String(fileString)}
									focusBorderColor='#fff'
									resize='none'
									style={{ overflowY: "scroll", borderWidth: 0 }}
								/>
							</Box>
							<Box as='label' alignSelf='center' htmlFor='csvInput'>
								<HStack>
									<Text textAlign='center'>{t("uploadFile")}</Text>
									<Image src={require("src/assets/csv.png")} />
								</HStack>
							</Box>
						</>

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
							width={["90%", "90%"]}
							height={["50px", "60px"]}
							fontSize={["16px", "24px"]}
							color='white'
							fontWeight='bold'
							borderRadius='md'
							bgGradient='linear(to-r, purple.500, blue.500)'
							as='button'
							_hover={{
								bgGradient: "linear(to-r, blue.300, purple.300)",
								textColor: "#gray.300",
							}}
							style={{
								fontWeight: "600",
							}}>
							{t("generate")}
						</Box>
					</VStack>
					<RandomResultat
						type={TypeResultat.STRING}
						startRandom={false}
						listNumberRandom={listResultat}
					/>
				</HStack>
			</Center>
		</Box>
	);
};
export default ListRandomGenerator;
