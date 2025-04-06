const fileTypes = ["image/jpg", "image/jpeg", "image/png"];

export const validateInputByRegex = (value: string, regex: RegExp) =>
  regex.test(value.trim());

export const validateInputFile = (files: FileList | null) => {
  const file = files?.[0];

  if (!file) return false;
  if (!fileTypes.includes(file.type)) return false;

  const maxSize = 500 * 1024;
  return file.size < maxSize;
};
