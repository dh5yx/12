```json
{
    "compilerOptions": {
        "noImplicitAny": false, //不需要显示的声明变量的类型any
        "target": "esnext",// 编译后的目标javascript版本， ES5, ES6/ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ESNext
        "useDefineForClassFields": true,
        "module": "esnext", //配置的是我们代码的模块系统， Node.js的CommonJS、ES6标准的esnext、requireJs的AMD
        "moduleResolution": "node", //决定了我们编译器的工作方式，"node" and "classic", 但classic在2019年已经废弃，现在只剩node可以选择了
        "strict": true,
        "jsx": "preserve", //允许编译器支持编译react代码
        "sourceMap": true,
        "resolveJsonModule": true,
        "esModuleInterop": true, // false,  import * as React from 'react'   true //允许我们使用commonjs的方式import默认文件， import React from 'react'
        "lib": ["esnext", "dom"], // document.getElementById('root')
        "types": [],
        "allowJs": true, //允许混合编译Javascript文件
        "skipLibCheck": true,
        "allowSyntheticDefaultImports": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "isolatedModules": true, //编译器会将每个文件作为单独的模块来使用
        "noEmit": true, //表示当发生错误的时候，编译器不会生成JavaScript代码
        "references": [{ "path": "./tsconfig.node.json" }]
        // ./tsconfig.node.json"
        // {
        //     "compilerOptions": {
        //         "composite": true,
        //         "module": "esnext",
        //         "moduleResolution": "node"
        //     },
        //     "include": ["vite.config.ts"]
        // }

    },
    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}

```
