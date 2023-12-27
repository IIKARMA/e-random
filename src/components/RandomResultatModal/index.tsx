import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  ModalFooter,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
interface RandomResultatModalProps {
  isOpen: boolean;
  onClose: () => void;
  handlerRandom:()=>void
  listNumberRandom: number[];
}
const RandomResultatModal = ({
  isOpen,
  onClose,
  listNumberRandom,handlerRandom
}: RandomResultatModalProps) => {
  const {t}=useTranslation()
  return (
    <Modal isCentered size="full" isOpen={isOpen} onClose={onClose}>
      <ModalContent bgGradient="linear(to-r, purple.300, blue.300)">
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Text
            my="45%"
            fontSize={[120, 180]}
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            {listNumberRandom.at(-1)}
          </Text>
        </ModalBody>

        <ModalFooter justifyContent="center" alignItems="center">
          <Box
          onClick={handlerRandom}
            width={["100%", "100%"]}
            height={["50px", "60px"]}
            fontSize={["16px", "24px"]}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, purple.500, blue.500)"
            as="button"
            _hover={{
              bgGradient: "linear(to-r, blue.300, purple.300)",
              textColor: "#gray.300",
            }}
            style={{
              fontWeight: "600",
            }}
          >
            {t("generateMore")}
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default RandomResultatModal;
