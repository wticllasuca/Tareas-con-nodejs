require('colors')

const mostrarMenu = ()=>{
    return new Promise((resolve,reject)=>{
        console.clear()
        console.log('Limpiado'.red)
        console.log('===================='.green)
        console.log('Selecione una opcion')
        console.log('====================\n'.green)
    
        console.log(` ${ '1.'.green } Crear una tarea`)
        console.log(` ${ '2.'.green } Listar Tareas`)
        console.log(` ${ '3.'.green } Listar tareas completas`)
        console.log(` ${ '4.'.green } Listar tareas pendientes`)
        console.log(` ${ '5.'.green } Completar tarea(s)`)
        console.log(` ${ '6.'.green } Borrar tarea(s)`)
        console.log(` ${ '0.'.green } Salir`)
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question('Selecione una opcion:',(opt)=>{
            readline.close()
            resolve(opt)
        })
    })
}
const pausa = ()=>{
    return new Promise((resolve,reject)=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(`\nPresione ${'ENTER'.green} para continudar\n`,(opt)=>{
            readline.close()
            resolve()
        })
    })
}
module.exports = {mostrarMenu , pausa}