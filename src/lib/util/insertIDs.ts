export const insertIDs = (code: string): string => {
  const lines = code.split(/\r?\n+/);
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split('(');
    if (parts.length > 1) {
      lines[i] = `${parts[0]}(<u>${parts[0]}</u> ${parts[1]}`;
    }
  }
  console.log(lines.join('\n'));

  return lines.join('\n');
};
