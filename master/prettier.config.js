/*
 * @Description:
 * @Author: dh
 * @Date: 2022-06-08 16:47:43
 * @LastEditors: dh
 * @LastEditTime: 2022-06-27 16:42:31
 */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    vueIndentScriptAndStyle: true,
    singleQuote: true, // 单引号
    quoteProps: 'as-needed',
    bracketSpacing: true,
    trailingComma: 'all',
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    arrowParens: 'always',
    insertPragma: false,
    requirePragma: false,
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    endOfLine: 'auto',
};


// "prettier.printWidth": 100, // 超过最大值换行

// "prettier.tabWidth": 4, // 缩进字节数

// "prettier.useTabs": false, // 缩进不使用tab，使用空格

// "prettier.semi": false, // 在语句末尾添加分号

// "prettier.singleQuote": true, // 使用单引号代替双引号

// "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行

// "prettier.arrowParens": "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号

// "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"

// "prettier.disableLanguages": ["vue"], // 不格式化vue文件，vue文件的格式化单独设置

// "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto

// "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验

// "prettier.htmlWhitespaceSensitivity": "ignore",

// "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中

// "prettier.jsxBracketSameLine": true, // 在jsx中把'>' 单独放一行

// "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号

// "prettier.parser": "babylon", // 格式化的解析器，默认是babylon

// "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier

// "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验

// "prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）

// "prettier.tslintIntegration": false // 不让prettier使用tslint的代码格式进行校验

// requirePragma: false, // (v1.7.0+) Prettier可以严格按照按照文件顶部的一些特殊的注释格式化代码，这些注释称为“require pragma”(必须杂注)

// rangeStart: 0, // 只格式化某个文件的一部分

// rangeEnd: Infinity, // 只格式化某个文件的一部分

// filepath: 'none', // 指定文件的输入路径，这将被用于解析器参照

// insertPragma: false, //  (v1.8.0+) Prettier可以在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了。
