export const validateInputByRegex = (value: string, regex: RegExp) => regex.test(value.trim());

export const validateInputFile = (files: FileList | null) => files && files[0];