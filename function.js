function p1(num){
    let tos = ""
    for(i = num.length - 1; i >= 0; i--) {
        tos += num[i];
    }
    return tos;
    
}
console.log(p1("55553"));

//reverse techinique jjk explained in javascript function
function damage(cursedTechnique){
    let rev = ""
    for(let i = cursedTechnique.length - 1; i >= 0; i--){
        rev += cursedTechnique[i]
    }
    return rev;
}
console.log(damage("500000000000000"))

function h(username, age){
    console.log(`selamat ulang tahun ${username}` )
    console.log(`selamat ulang tahun ke ${age}`)
    
}
h("malik", 14);