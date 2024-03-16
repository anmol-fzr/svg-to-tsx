import { Case } from 'change-case-all';

type GetFileName = {
  name: string;
  appendIcon?: boolean
}

const getFileName = ({ name,appendIcon = true }: GetFileName) => {
  const pascal = Case.pascal(name.split(".")[0] as string)
  if (!appendIcon) return pascal
  return pascal + "Icon"
}

export default getFileName;
