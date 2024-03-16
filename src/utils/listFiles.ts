import fs from "node:fs"

function listFilesSync(directoryPath: string): string[] {
  try {
    const files = fs.readdirSync(directoryPath);
    return files;
  } catch (err) {
    console.error('Error reading directory:', err);
    return []; 
  }
}

export default listFilesSync
