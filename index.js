const names=["Guadalupe", "Ollie", "Aki"];
function writeCards(names, event){
    let messages = []
    for (let n=0; n<names.length; n++){
       messages.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`)
    }
    return messages
}
writeCards(names, "surprise")

function countDown(){
  let n = 10;
  while(n<=10&&n>=0){
    console.log(n)
    n--
  }
}