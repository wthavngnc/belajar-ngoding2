function segitiga1(n){
    let s = "";
    for(i = 1; i<=n; i++){
        for(j=1;j<=n; j++){
            s += "*"
        }
        s += '\n';
    }
    return s;
}
console.log(segitiga1(5)); 

function segitiga2(n){
    let s = "";
    for(i = 1; i <= n; i++){
        for(j = 1; j <=i; j++){
             s += "* "
        }
        s += '\n'
           
    }
    return s;
}
console.log(segitiga2(5))

function segitiga3(n){
    let s = "";
    for(i = 1; i <= n; i++){
        for(j = n - 1; j >= i; j--){
            s += ' '  
        }
        for(k = 1; k <= i; k++){
            s += "*"
            
        }
        s += '\n';
    }
    return s;
}
console.log(segitiga3(5));

f = 36;
console.log(f)

    
    

