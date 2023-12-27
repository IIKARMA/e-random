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
		<VStack alignSelf='flex-start'>
			<Text
				style={{
					textAlign: "left",
					fontWeight: "bold",
					color: "#fff",
					fontSize: 32,
					width: "100%",
				}}>
				{label}
			</Text>
			<Input
				_focus={{
					background: "white",
					borderColor: "blue.400",
				}}
				color='gray.600'
				fontWeight='600'
				textAlign='center'
				fontSize='32'
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
