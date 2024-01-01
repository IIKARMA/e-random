import { useEffect, useState, } from "react"

import { useToast } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";

interface useValidationProps { check: boolean, minNumber: number, maxNumber: number }

export const useValidation = ({ check, minNumber,
    maxNumber }: useValidationProps) => {
    const toast = useToast()
    const { t } = useTranslation()
    const [isValid, setIsValid] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    useEffect(() => {
        if (Number(maxNumber) <= 0) {
            check && setError(t('errorMessage.inputMaxValue'))
            setIsValid(false)
        }
        else {
            setError('')
            setIsValid(true)
        }

        if (Number(minNumber) >= Number(maxNumber)) {
            check && setError(t('errorMessage.maxValueMustBeGreater'))
            setIsValid(false)
        }
        else {
            setError('')
            setIsValid(true)
        }
    }, [check, toast, t, maxNumber, minNumber])


    useEffect(() => {
        if (error !== '')
            toast({ title: error, status: 'error', duration: 3000, position: 'top-right', isClosable: true })
        else setIsValid(true)
    }, [error, toast])

    return { isValid }
}