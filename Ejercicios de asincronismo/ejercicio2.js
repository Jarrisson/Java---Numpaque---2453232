var vec=[]
for (let i = 0; i < 10; i++) {
    vec[i]=Math.round(Math.random()*100);
}
var k=0
setInterval(() => {
    console.log(vec[k])
    k++;
    k==10?k=0:k=k
}, (1000));