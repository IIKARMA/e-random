import { defineStyleConfig } from "@chakra-ui/react";
export const Textarea = defineStyleConfig({
    variants: {
        areaFile: {
            w: ["320", "400", "500"],
            height: ["220", "180"],
            fontSize: ["16px", "18px"],
            resize: 'none',
            overflowY: 'scroll',
            borderWidth: 0
        }
    }
})