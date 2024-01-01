import { ChangeEvent, FC } from "react";
import { Input, Text, VStack } from "@chakra-ui/react";

interface TextFieldProps {
	text: string | readonly string[] | number | undefined;
	label: string;
	name: string;
	inputType: string;
	placeholder?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void;
}

const TextField: FC<TextFieldProps> = ({
	text,
	label,
	placeholder,
	name,
	inputType,
	onChange,
}) => {
	return (
		<VStack w={[320, 280]} alignSelf='flex-start'>
			<Text
				width={["90%", "100%"]}
				fontSize={["18px", "24px"]}
				style={{
					textAlign: "center",
					fontWeight: "bold",
					color: "#fff",
				}}>
				{label}
			</Text>
			<Input
				height={["40px", "60px"]}
				fontSize={["18px", "32px"]}
				width={["90%", "100%"]}
				_focus={{
					background: "white",
					borderColor: "blue.400",
				}}
				color='gray.600'
				fontWeight='600'
				textAlign='center'
				lineHeight='48'
				type={inputType}
				value={text}
				variant='filled'
				placeholder='Filled'
				onChange={(e) => {
					onChange(e, name);
				}}
			/>
		</VStack>
	);
};
export default TextField;
