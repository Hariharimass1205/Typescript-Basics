interface Employee{
    name:string
    id:number
}
interface Admin{
    isAdmin:boolean
    admminLevel:number
}

type adminEmployee = Employee &  Admin

let adminEmployees: adminEmployee = {
    name:"hari",
    id:23,
    isAdmin:true,
    admminLevel:2
}

// here we just taking two data types and adding it to a new data type and using it as a data type