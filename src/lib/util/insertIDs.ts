function insertSelectedCharacters(str: string): string {
  const regex = /(\S+)([([{])([^)\]}]+)([)\]}])/g;
  const result = str.replace(regex, '$1$2$1 <i>$3</i>$4');
  return result;
}

export const insertIDs = (code: string): string => {
  return insertSelectedCharacters(code);
};
