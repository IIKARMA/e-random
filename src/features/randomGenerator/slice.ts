import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RandomGeneratorState } from "src/features/randomGenerator/types";
import type { RootState } from 'src/store'

const initialState: RandomGeneratorState = {
    generateNumerosity: 0, generatedResultat: []
};

export const generationRandom = createSlice({
    name: "generator",
    initialState,
    reducers: {

    }
});
// export const { setResultat } = generationRandom.actions

export const selectVariant = (state: RootState) => state.variants.variant
export default generationRandom.reducer


