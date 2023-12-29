import { defineStyleConfig } from "@chakra-ui/react";
export const HStack = defineStyleConfig({
    variants: {
        conteiner: {
            boxShadow: 'xl',
            w: ["90%", "50%", "50%"],
            spacing: 10,
            alignSelf: 'center',
            display: 'flex',
            pt: ['10', '20'],
            p: '2rem',
            justifyContent: 'space-around',
            bg: '#cdb4d09b'
        }
    }
})