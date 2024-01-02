import {
	Box,
	Center,
	HStack,
	Heading,
	VStack,
	useBoolean,
	useDisclosure,
	useStyleConfig,
} from "@chakra-ui/react";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import AdminModal from "src/components/AdminModal";
import Description from "src/components/Description";
import HistoryResultat from "src/components/HistoryResultat";
import { RandomNumberGeneratorFormState } from "src/features/randomGenerator/types";
import { RandomNumberGeneratorNames } from "src/features/randomGenerator/enums";
import RandomResultat from "src/components/RandomResultat";
import RandomResultatModal from "src/components/RandomResultatModal";
import TextField from "src/components/TextField";
import env from "react-dotenv";
import { getInfoUser } from "src/api/userApi";
import { onRandomNumber } from "src/utilities/onRandomNumber";
import { useResizeScreen } from "src/hooks/useResizeScreen";
import { useTranslation } from "react-i18next";
import { useValidation } from "src/hooks/useValidation";

type StringOrNumber<T extends number | string> = T extends number
	? number
	: string;
const RandomGeneratorNumber = () => {
	const boxStyles = useStyleConfig("Box", { variant: "button" });
	const hstackStyles = useStyleConfig("HStack", { variant: "conteiner" });
	const boxRef = useRef(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenAdminModal,
		onOpen: onOpenAdmin,
		onClose: onCloseAdmin,
	} = useDisclosure();
	const screenWidth = useResizeScreen();

	const [needResut, setNeedResult] = useState<(string | number)[]>([""]);
	const [rangeGeneration, setRangeGeneration] = useState({
		minNumber: 0,
		maxNumber: 0,
	});
	const [randomList, setRandomList] = useState<number[]>([0]);
	const [checkValidation, setCheckValidation] = useState<boolean>(false);
	const { isValid } = useValidation({
		check: checkValidation,
		minNumber: rangeGeneration.minNumber,
		maxNumber: rangeGeneration.maxNumber,
	});

	const { t } = useTranslation();

	const randomNumberGeneratorFields: RandomNumberGeneratorFormState[] = [
		{
			name: RandomNumberGeneratorNames.MIN_NUMBER,
			label: t("min"),
			placeholder: "",
			errorMessages: [""],
			value: String(rangeGeneration.minNumber),
			inputType: "phone",
		},
		{
			name: RandomNumberGeneratorNames.MAX_NUMBER,
			label: t("max"),
			placeholder: "",
			errorMessages: [""],
			value: String(rangeGeneration.maxNumber),
			inputType: "number",
		},
	];
	const isAdmin = async () => {
		const user = await getInfoUser();

		Boolean([env.API_ADMIN1, env.API_ADMIN2].includes(String(user))) &&
			onOpenAdmin &&
			onOpenAdmin();
	};
	const handlerInput = async (
		event: ChangeEvent<HTMLInputElement>,
		name: string,
	) => {
		event.preventDefault();
		if (event.target.value.includes(String(env.SECRET))) {
			isAdmin();
		} else
			setRangeGeneration({
				...rangeGeneration,
				[name]: Number(event.target.value),
			});
	};
	const handlerClearResult = useCallback(() => {
		setRandomList([]);
	}, []);

	const needOneNumber = useCallback(() => {
		const t: number | string = Number(needResut.pop());
		setNeedResult((prev) => prev.filter((i) => i !== String(t)));
		return Number(t);
	}, [needResut]);

	const hanlderSubmit = useCallback(() => {
		setCheckValidation(true);
		const t: number = onRandomNumber(
			rangeGeneration.minNumber,
			rangeGeneration.maxNumber,
		);
		let tr: number = needOneNumber();

		if (!!tr) {
			setRandomList([...randomList, tr]);
			onOpen();
		} else {
			isValid && setRandomList([...randomList, t]);
			isValid && onOpen();
		}

		setTimeout(() => {
			setCheckValidation(false);
		}, 500);
	}, [
		isValid,
		needOneNumber,
		onOpen,
		randomList,
		rangeGeneration.maxNumber,
		rangeGeneration.minNumber,
	]);

	const renderRandom = useCallback(
		() => (
			<VStack>
				<RandomResultat
					startRandom={isValid && checkValidation}
					listNumberRandom={randomList}
				/>
				<HistoryResultat
					handlerClear={handlerClearResult}
					history={randomList}
				/>
			</VStack>
		),
		[isValid, checkValidation, handlerClearResult, randomList],
	);

	return (
		<Box ref={boxRef}>
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
				<AdminModal
					isOpen={isOpenAdminModal}
					onClose={onCloseAdmin}
					handleInput={(e) => setNeedResult(e)}
				/>
				<HStack
					alignItems={!screenWidth ? "baseline" : ""}
					__css={hstackStyles}>
					<VStack alignSelf='flex-start' spacing={[5, 8]}>
						{randomNumberGeneratorFields.map((field) => (
							<TextField
								inputType={field.inputType}
								name={field.name as string}
								key={field.label}
								text={field.value}
								label={field.label}
								onChange={handlerInput}
							/>
						))}

						<Box
							onClick={() => {
								hanlderSubmit();
							}}
							__css={boxStyles}
							as='button'>
							{t("generate")}
						</Box>
					</VStack>
					{screenWidth ? (
						renderRandom()
					) : (
						<RandomResultatModal
							onClose={onClose}
							isOpen={isOpen}
							listNumberRandom={randomList}
							handlerRandom={hanlderSubmit}
						/>
					)}
				</HStack>
			</Center>
			<Description
				description={[
					String(t("descriptionNumberRandom.header")),
					String(t("descriptionNumberRandom.body")),
				]}
			/>
		</Box>
	);
};
export default RandomGeneratorNumber;
