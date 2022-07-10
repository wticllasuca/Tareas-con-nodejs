var inquirer = require('inquirer');
require('colors')

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices : [{
            value:'1',
            name: `${"1.".green} Crear tarea`
        },
        {
            value:'2',
            name:`${"2.".green} Listar tareas`
        },
        {
            value: '3',
            name:`${"3.".green} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${"4.".green} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${"5.".green} Completas tarea(s)`
        },
        {
            value: '6',
            name:`${"6.".green} Borrar tareas`
        },
        {
            value: '0',
            name: `${"0.".green} Salir`
        }
    ]

    }
]


const inquirerMenu = async()=>{
    console.clear()
   // console.log('Limpiado'.red)
    console.log('===================='.green)
    console.log('Selecione una opcion')
    console.log('====================\n'.green)

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion
}

const pausa = async()=>{
    const question = [
        {
            type:'input',
            name: 'enter',
            message: `Precione ${'ENTER'.green} para continuar`
        }
    
    ]
    console.log('\n')
    const opcion=await inquirer.prompt(question);
    return opcion
}
const leerInput = async(mensaje)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question)
    return desc
}

const listadoTareasBorrar = async(tareas = [])=>{
    const choices = tareas.map((tarea,indice)=>{
        let idx = `${String(indice + 1).green}`
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })
    choices.unshift({
        value:'0',
        name: '0.'.green + 'Cancelar'.red
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices: choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas)
    return id
}
const confirmar = async(message)=>{
    const question = [{
        type: 'confirm',
        name: 'ok',
        message: message
    }]
    const {ok} = await inquirer.prompt(question)
    return ok
}

const mostrarListadoCheckList = async(tareas = [])=>{
    const choices = tareas.map((tarea,indice)=>{
        let idx = `${String(indice + 1).green}`
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn)? true : false
        }
    })

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecione',
            choices: choices
        }
    ] 
    const {ids} = await inquirer.prompt(preguntas)
    return ids
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
}