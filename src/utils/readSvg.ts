import fs from "fs"

function readSvg(filePath: string) {
  try {
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    return svgContent;
  } catch (err) {
    console.error('Error reading SVG file:', err);
    return null; 
  }
}

export default readSvg
