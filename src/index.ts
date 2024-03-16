import path from 'path';
import fs from "fs"
import { listFiles, readSvg, svgToJsx, getFileName } from "./utils"

const dirPath = path.join(__dirname, "../svg/");

const filesSync = listFiles(dirPath);

filesSync.map((file,index)=>{
  if (index === 0) {
   const componentName = getFileName({name:file,appendIcon:false })
   const fileName = getFileName({name:file })
   const JSX = (svgToJsx({  svgString: readSvg(path.join(dirPath,file)) as string ,componentName } ))
    fs.writeFileSync( path.join(__dirname,"../icons",fileName+".tsx") ,JSX)
  }
})
