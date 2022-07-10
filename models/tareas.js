const Tarea = require("./tarea")

class Tareas{
    //Constructor
    constructor(){
        this._listado = {}
    }
    //Borrar
    borrarTarea(id=''){
        if(this._listado[id]){

            delete this._listado[id]
        }
    }
    //Para mostrar en consola
    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    }
    cargarTarearFromArray(tareas = []){
        tareas.forEach((tarea)=>{
            this._listado[tarea.id] = tarea
        })
    }

    //Creamos la tarea con llave y tarea
    crearTarea(desc){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
    listandoCompleto(){
       let listado = this.listadoArr
       let i = 1 
       console.log('')
       listado.forEach(tarea =>{
            console.log(`${String(i++).green} ${tarea.desc} :: ${tarea.completadoEn?'Completado'.green:'Pendiente'.red}`)
       })
    }
    listarPendientesCompletas(completadas){
        let listado = this.listadoArr
        console.log('')
        let tareas = listado.filter(tareas => tareas.completadoEn === completadas)
        tareas.forEach((tarea,indice) =>{
            console.log(`${String(indice+1).green} ${tarea.desc} :: ${tarea.completadoEn?'Completado'.green:'Pendiente'.red}`)
       })
    }
    completarTareas(ids){
        ids.forEach(id =>{
            const tarea = this._listado[id]
            if(!tarea.completadoEn){
                tarea.completadoEn = true
            }
        })
        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = false
            }
        })
    }

}
//Exportar clase
module.exports = Tareas 