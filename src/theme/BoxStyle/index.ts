import { defineStyleConfig } from "@chakra-ui/react";

export const Box = defineStyleConfig({

    variants: {
        button: {
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 'md',
            bgGradient: 'linear(to-r, purple.500, blue.500)',
            fontSize: ["16px", "24px"],
            height: ["45px", "60px"],
            width: ["90%", "100%"],
            textAlign: 'center',
            _hover: {
                bgGradient: "linear(to-r, blue.300, purple.300)",
                textColor: "#gray.300",
            },
        },
        buttonCard: {
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 'md', alignSelf: 'center',
            bgGradient: 'linear(to-r, purple.600, blue.300)',
            fontSize: ["16px", "18px"],
            width: [320, 350, 340],
            height: ['40px', '45px'], boxShadow: "xl",
            textAlign: 'center',
            _hover: {
                bgGradient: "linear(to-r, blue.300, purple.300)",
                textColor: "#gray.300",
            },
        }

    }
})
