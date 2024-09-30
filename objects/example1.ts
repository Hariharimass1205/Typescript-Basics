let user = {
    name:"hari",
    email:"hari@gmail.com",
    isActive:true
}

function objarg({name:string,isPaid:boolean}){}
// this is how u have to pass obj in fn
objarg({name:"hari",isPaid:true})
// while pass an arg u have to wrap it in obj


function returnobjSyntex({}):{}{
    return {}
    //this is syntex of obj returning fn
}
function returnobjSyntexs({}):{name:string,isPaid:boolean}{
    return {name:"hari",isPaid:false}
    //in this in return type u can mention the what type u can return  
}


