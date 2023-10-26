/**
 * closure.js: mediante una función arrow declara un closure. 
 * En cada invocación la variable "encerrada" se asignará por Logical nullish assignment
 * 
 * @author Héctor Cevallos Paredes
 * 
 */

console.log("--Closure--");

const clousure = () => {
    let variable = null;
    const arrow = () => {
        variable ??= "Default";
        return variable;
    };
    return arrow();
}

console.log(`El valor recibido es: ${clousure()}`);