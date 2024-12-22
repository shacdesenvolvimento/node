console.log("Global Name");
//estas são funções parecidos com o window do java script que ja vem incoorparada no global


//funcao para ser chamada

//executar apos alguns segundos eu poderia colocar o global.set...

setTimeout(function() {
    console.log("setTimeout Name");
}, 2000);

//pega nome do diretorio
console.log(__dirname)
//pega o nome do arquivo
console.log(__filename)