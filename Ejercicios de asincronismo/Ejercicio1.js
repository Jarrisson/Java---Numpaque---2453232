x=math.round(math.random()*(25-5)+5)

function arrayaleatorio(limite) {
 var num= []
 for (let i = 0; i < limite; i++) {
    num[i]=math.round(math.random()*(100-20)+20);
 }  
 console.log(num) 
}

function numeros1(limite) {
    var nume1=[]
    for (let i = 0; i < limite; i++){
        nume1[i]=1
    }
    console.log(nume1)
}
settimeout(arrayaleatorio,3000)