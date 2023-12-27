import {
	VStack,
	NumberInput,
	Text,
	NumberInputField,
	Input,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
export type ONLY_FOR_FORMAT =
	| "text"
	| "search"
	| "none"
	| "tel"
	| "url"
	| "email"
	| "numeric"
	| "decimal";
interface TextFieldProps {
	text: string | readonly string[] | number | undefined;
	label: string;
	name: string;
	inputType: string;
	placeholder?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void;
}

const TextField = ({
	text,
	label,
	placeholder,
	name,
	inputType,
	onChange,
}: TextFieldProps) => {
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
				fontSize={["18px", "24px"]}
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
