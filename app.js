
require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer')
const Tareas = require('./models/tareas')


const main = async()=>{
   
    let opt
    let opcion
    const tareas = new Tareas()
    const tareasdb = leerDB()
    if(tareasdb){
        tareas.cargarTarearFromArray(tareasdb)
    }
    do{
       opt =  await inquirerMenu()
       switch(opt){
        case '1':
            const descripcion = await leerInput('Descripcion: ')
            tareas.crearTarea(descripcion)
            break 
        case '2':
            tareas.listandoCompleto()
            break
        case '3':
            tareas.listarPendientesCompletas(true)
            break
        case '4':
            tareas.listarPendientesCompletas(false)
            break
        case '5':
           const ids = await mostrarListadoCheckList(tareas.listadoArr)
           tareas.completarTareas(ids)
            break
        case '6':
            const id = await listadoTareasBorrar(tareas.listadoArr)
            if(id !== '0'){
                const ok = await confirmar('¿Estas seguro?')
                if(ok){
                    tareas.borrarTarea(id)
                    console.log('Tarea borrada'.red)
                }
            }
            break
       }

       guardarDB(tareas.listadoArr)

       opcion = await pausa()
       


    }while(opt !== '0')
}

main()