export const requiredFiled = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}
export  const maxLengthCreator = (max: number) => (value: string) => {
    if (value && value.length > max) return `Max length is ${max} symbols `
    return undefined
}



const minLengthCreator = (min: number) => (value: string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength = minLengthCreator(2)