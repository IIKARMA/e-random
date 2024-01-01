import { defineStyleConfig } from "@chakra-ui/react";
export const Heading = defineStyleConfig({
    variants: {
        classic: {
            pt: ["0", "20"],
            mt: '0',
            fontSize: ["24px", "36px"],
            textAlign: 'center',
            pb: '10',
            textColor: '#fefef09e'
        }
    }
})