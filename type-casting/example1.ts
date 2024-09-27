interface user{
    name:string
    age:number
    gender:string
}

let fetchData = '{"name":"hari","age":23,"gender":"male"}'
let result = JSON.parse(fetchData) as user
console.log(result.name,result.age,result.gender)


// if u put "as user" means JSON will take "user"
// format as the referance and only user 
//format can be used in result