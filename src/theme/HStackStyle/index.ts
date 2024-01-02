import { defineStyleConfig } from "@chakra-ui/react";
export const HStack = defineStyleConfig({
    variants: {
        conteiner: {
            boxShadow: 'xl',
            w: ["90%", "80%", "50%"],
            spacing: 10,
            borderRadius: '1.2rem',
            alignSelf: 'center',
            flexWrap: 'wrap',
            display: 'flex',
            pt: ['10', '20'],
            p: '2rem',
            justifyContent: 'space-around',
            bg: '#cdb4d09b'
        },
        fileLabel: {
            w: ["100%", "100%"],
            bg: '#fffff08f',
            borderRadius: '0.5rem',
            borderWidth: 1,
            alignContent: 'center',
            justifyContent: 'center',
            py: 1,
            px: 5
        }
    }
})