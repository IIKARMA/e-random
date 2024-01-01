import { HStack, IconButton, Text } from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface HistoryResultatProps {
	history: number[];
	handlerClear: () => void;
}
const HistoryResultat: FC<HistoryResultatProps> = ({
	history,
	handlerClear,
}) => {
	const { t } = useTranslation();
	const numbers: number[] =
		history.length > 4 ? [...history].reverse() : [...history].reverse();
	return (
		<HStack alignItems='baseline' maxW={[280, 380]}>
			<Text>
				{t("history")}
				<b>{[...numbers].reverse().at(-1)}</b>,{" "}
				{[...numbers].slice().join(", ").padStart(1)}
			</Text>
			<IconButton
				onClick={handlerClear}
				colorScheme='#cdb4d09b'
				aria-label='Delete Icon'
				icon={<DeleteIcon />}
			/>
		</HStack>
	);
};
export default HistoryResultat;
