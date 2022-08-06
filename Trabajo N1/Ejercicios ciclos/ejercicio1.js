 let dividendo = 36
 let divisor = 1
 while (divisor <= dividendo) {
     if (dividendo % divisor === 0) {
         console.log('el numero ' + dividendo, 'es divisible con ' + divisor);
     }
     divisor++;
 }