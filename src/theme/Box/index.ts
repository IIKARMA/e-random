import { defineStyleConfig } from "@chakra-ui/react";
import { hover } from "@testing-library/user-event/dist/hover";

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
        }
    }
})
