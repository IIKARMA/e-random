import { extendTheme } from "@chakra-ui/react";
import { Box } from 'src/theme/BoxStyle/index'
import { HStack } from 'src/theme/HStackStyle/index'
import { Textarea } from 'src/theme/TextareaStyle/index'
import { Heading } from 'src/theme/HeadingStyle/index'
export const theme = extendTheme({
    components: {
        Box,
        HStack,
        Textarea,
        Heading
    }
})