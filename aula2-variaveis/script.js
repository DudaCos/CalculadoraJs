//Tipos Primitivos
//Tipos Booleanos

var vOuF = false
console.log(typeof (vOuF));

var numeroQualquer = 1;
console.log(typeof (numeroQualquer));

var nome = 'Duda';
console.log(typeof (nome));

//como declarar uma variavel

var variavel;
console.log(variavel);
//retorna valor nulo/undefine pq nao foi atribuido nada pra variavel

var variaveis = 'Duda';
variaveis = 'Oliveira'
console.log(variaveis);
//retorna o nome Oliveira pq pode ser alterada depois de declarada

let variavel2 = 'Duda';
variavel2 = 'Oliveira';
console.log(variavel2)
// tambem pode ser alterada depois da sua criação

const constante = 'Duda';
console.log(constante);
//nao pode ter seu valor alterado e obrigatoriamente tem que ter valor inicial

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

