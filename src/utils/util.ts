export const isEmptyString = (value: string) => value.length === 0;

export const isString = (value: any) => value?.constructor === String;

export const isEmptyObject = (value: object) => Object.keys(value).length === 0;
