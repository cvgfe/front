
function sumTo1(x){
    let add = 0;
    
    for(var i = 0;i<=x;i++){
       add = add+i
    }
    console.log(add)
}
sumTo1(100)

function sumTo2(x){
    if(x==1){
        return x;
    }
    else{
        return x+sumTo2(x-1);
    }
    
}
console.log(sumTo2(100))


function sumTo3(x){
    const d = 1;
    let Sn = x*(x+1)/2;
    return Sn;
}
console.log(sumTo3(100))