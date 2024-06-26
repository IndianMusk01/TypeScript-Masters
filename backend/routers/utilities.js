const fs = require('fs');
const ts = require('typescript');

//  function convertJsToTs(jsCode) {
//    // Add a newline at the end to ensure last line is parsed
//   const jsCodeWithNewline = jsCode + "\n";

//    const result = ts.transpileModule(jsCodeWithNewline, {
//      compilerOptions: {
//        allowJs: true, // Allow JavaScript code
//        declaration: true, // Generate .d.ts file (optional)
//        emitDeclarationOnly: true // Only emit .d.ts file (optional)
//      }
//    });

//   return result.outputText.trim(); // Trim any leading or trailing whitespace
//  }

function convertJsToTs(jsCode) {
  console.log('js to ts');
  // Add types to variable declarations
  jsCode = jsCode.replace(/const (\w+) = "([^"]*)";/g, 'const $1: string = "$2";');
  jsCode = jsCode.replace(/let (\w+) = (\d+);/g, 'let $1: number = $2;');
  jsCode = jsCode.replace(/const (\w+) = (\d+);/g, 'let $1: number = $2;');

  jsCode = jsCode.replace(/const (\w+) = (true|false);/g, 'const $1: boolean = $2;');
  jsCode = jsCode.replace(/const (\w+) = \[(.+)\];/g, 'const $1: number[] = [$2];');

  // Add types to function parameters and return type
  jsCode = jsCode.replace(/function (\w+)\((\w+), (\w+)\) {/g, 'function $1($2: number, $3: number): number {');
  console.log(jsCode);
  return jsCode;
}


//function convertJsToTs(jsCode) {
// const tsFilename = 'temp.ts'; // Temporary filename for conversion
//fs.writeFileSync(tsFilename, jsCode); // Write JS code to temporary file

//const output = require('child_process').execSync(tsc ${tsFilename}); // Execute tsc
// fs.unlinkSync(tsFilename); // Delete temporary file

//return output.toString(); // Return converted TypeScript code
//}



function convertTsToJs(tsCode) {
  // const fileContents = ts.sys.readFile(tsFilePath);
  const result = ts.transpileModule(tsCode, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS, // Adjust module type as needed
      target: ts.ScriptTarget.ES2015,   // Adjust target ECMAScript version
      sourceMap: false                 // Optional: Generate source maps
    }
  });

  // ts.sys.writeFile(outputFilePath, result.outputText);
  return result.outputText;
}

// let result = convertTsToJs(const x:Number = 10;) // Returns const x: number = 10;
// console.log(result);

module.exports = { convertJsToTs, convertTsToJs };