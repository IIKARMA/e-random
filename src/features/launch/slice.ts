import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RandomVariants } from "src/features/launch/enums";
import { VariantRandomState } from "src/features/launch/types";
import type { RootState } from 'src/store'

const initialState: VariantRandomState = {
	variant: RandomVariants.Number,
};

export const variantSlice = createSlice({
	name: "variants",
	initialState,
    reducers:{
        onSelectVariant:(state,action:PayloadAction<RandomVariants> )=>{
            state.variant=action.payload
        }
    }
});
export const {onSelectVariant} =variantSlice.actions

export const selectVariant=(state:RootState)=>state.variants.variant
export default variantSlice.reducer


