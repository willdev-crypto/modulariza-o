import { subtrair} from './operacoes.js'
// tem que incluir a extensão do arquivo

const resultado = subtrair(50,3)
console.log(resultado)

//No import , alterar o somar subtrair, e no const resultado tambem.

//----------

// no import default pode-se alterar o nome da variavel a ser recebida e nao usa chaves. Vantagem de renomear é evitar conflitos de nomes.

//import calculadora from 'calculadora.js';
//const resultado = calculadora.somar(4,2)(é um objeto com dois metodos somar e subtrair)
//console.log(resultado)