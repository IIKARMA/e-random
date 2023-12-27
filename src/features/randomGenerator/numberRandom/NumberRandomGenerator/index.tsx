import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import TextField from "src/components/TextField";
import Screen from "src/components/Screen";
import { ChangeEvent, useCallback, useState } from "react";
import { RandomNumberGeneratorFormState } from "src/features/randomGenerator/types";
import { useTranslation } from "react-i18next";
import { useValidation } from "src/hooks/useValidation";
import RandomNumber from "src/components/RandomNumber";
import HistoryResultat from "src/components/HistoryResultat";
// import { getInfoUser } from "../../../../api/userApi";
//178.158.193.2
export enum RandomNumberGeneratorNames {
	MIN_NUMBER = "minNumber",
	MAX_NUMBER = "maxNumber",
}
const RandomGeneratorNumber = () => {
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
			inputType: "number",
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

	const handlerInput = useCallback(
		(event: ChangeEvent<HTMLInputElement>, name: string) => {
			event.preventDefault();
			setRangeGeneration({
				...rangeGeneration,
				[name]: Number(event.target.value),
			});
		},
		[rangeGeneration],
	);
	const handlerClearResult = useCallback(() => {
		setRandomList([]);
	}, []);

	const hanlderSubmit = async () => {
		// const api = await getInfoUser();
		setCheckValidation(true);
		const t: number = onRandomNumber(
			rangeGeneration.minNumber,
			rangeGeneration.maxNumber,
		);
		isValid && setRandomList([...randomList, t]);
		setTimeout(() => {
			setCheckValidation(false);
		}, 500);
	};

	const onRandomNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const renderRandom = useCallback(
		() => (
			<VStack>
				<RandomNumber
					startRandom={isValid && checkValidation}
					listNumberRandom={randomList.reverse()}
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
		<>
			<Heading textAlign='center' pb='10' color='#fefef09e'>
				{t("numberRandomizer")}
			</Heading>
			<Center>
				<HStack
					wrap='wrap'
					width={{ base: "100%", sm: "50%", md: "25%" }}
					spacing='10'
					alignSelf='center'
					flex={3}
					w='85%'
					justify='center'
					py='10'
					mx='10'
					px='20'
					pt='20'
					justifyContent='space-around'
					borderRadius='1.5rem'
					bg='#cdb4d09b'>
					<VStack alignSelf='flex-start' spacing='3.5rem'>
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
							onClick={hanlderSubmit}
							p={4}
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
								fontSize: 28,
								fontWeight: "600",
								alignSelf: "flex-start",
								width: "100%",
								height: "80px",
							}}>
							{t("generate")}
						</Box>
					</VStack>
					{renderRandom()}
				</HStack>
			</Center>
		</>
	);
};
export default RandomGeneratorNumber;
