
import { RandomNumberGeneratorNames } from 'src/features/randomGenerator/screens/NumberRandomGenerator';
export interface RandomGeneratorState {
    generateNumerosity: number,
    generatedResultat: number[]

}

export interface RandomNumberGeneratorState extends RandomGeneratorState {
    minNumber: number,
    maxNumber: number,

}
export interface RandomNammeGeneratorState extends RandomGeneratorState {
    listForGenerate: string[]
}

export interface RandomNumberGeneratorFormState {
    name: RandomNumberGeneratorNames[keyof RandomNumberGeneratorNames],
    label: string,
    value: string,
    placeholder: string,
    errorMessages: string[]
    inputType: string
}
export enum TypeResultat {
    STRING = "string",
    NUBER = "number",
}