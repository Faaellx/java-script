let idade = Math.random()*10;
let idadeInteira = idade.toFixed(0) * idade.toFixed(0);

if (idadeInteira < 18) {
    console.log('Pessoa menor de idade')
}
else if(idadeInteira < 59) {
    console.log('Pessoa adulta :(')
}
else{
    console.log('Pessoa de terceira idade')
}




//console.log(idade);
//console.log(idadeInteira);
