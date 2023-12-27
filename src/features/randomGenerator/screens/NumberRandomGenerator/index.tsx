import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import TextField from "src/components/TextField";
import Screen from "src/components/Screen";
import { ChangeEvent, useCallback, useState } from "react";
import { RandomNumberGeneratorFormState } from "src/features/randomGenerator/types";
import { useTranslation } from "react-i18next";
import { useValidation } from "src/hooks/useValidation";
import RandomResultat from "src/components/RandomResultat";
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
							width={["90%", "100%"]}
							height={["50px", "60px"]}
							fontSize={["16px", "24px"]}
							onClick={hanlderSubmit}
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
					{renderRandom()}
				</HStack>
			</Center>
		</Box>
	);
};
export default RandomGeneratorNumber;