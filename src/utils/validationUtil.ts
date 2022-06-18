export const min = (minLen: number) => {
  return (source: string) => {
    if (!source) return `내용을 입력해주세요.`;
    if (source?.length < minLen) return `${minLen}보다 길게 적어주세요.`;
    else return "";
  };
};
export const max = (maxLen: number) => {
  return (source: string) => {
    if (!source) return `내용을 입력해주세요.`;
    if (source?.length > maxLen) return `${maxLen}보다 짧게 적어주세요.`;
    else return "";
  };
};

export const required = (source: string | number | boolean) => {
  if (!source) return `필수 사항입니다.`;
  else return "";
};
