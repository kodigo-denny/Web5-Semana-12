class Empleado{
    nombre
    apellido
    pais

    constructor(nombre, apellido, pais, horas){
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
    }

    getName(){
        return this.nombre + ' ' + this.apellido
    }
    
}

class TimeSheetReport{

    static print(emp, horas){
        return `El empleado ${emp.getName()} trabajo: ${horas}`
    }

    static printDiario(emp, horas){
        return `El empleado ${emp.getName()} trabajo: ${horas+2}`
    }
    

}