import { extendTheme } from "@chakra-ui/react";
import { Box } from 'src/theme/BoxStyle/index'
import { HStack } from 'src/theme/HStackStyle/index'
export const theme = extendTheme({
    components: {
        Box, HStack
    }
})