import { transform, Config } from '@svgr/core'
// import template from "../template/index"


type SvgToJsx = {
  svgString: string;
  componentName: string
}

const options:Config = { 
  dimensions: true,
  typescript: true,
  memo: true,
  
  expandProps: "end",
  exportType: "default",
  plugins: ["@svgr/plugin-jsx"],

  index: true,
  svgo: true,
  svgoConfig: {
  "plugins": [
    {
      "name": "preset-default",
      "params": {
        "overrides": {
          "removeTitle": false
        }
      }
    }
  ]
  },
  prettier: true,
  prettierConfig: {
    "semi": false
  }
}

const svgToJsx = ({svgString,componentName}:SvgToJsx) => transform.sync(svgString, options, { componentName })

export default svgToJsx;
