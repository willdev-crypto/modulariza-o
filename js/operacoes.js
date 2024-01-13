function somar(a, b) {
    return a + b
}

const subtrair = (a,b) => {
    return a - b
}
 export {somar, subtrair}

// arrow function nao faz diferença nenhuma, esta recebendo duas variaveis a e b.

//duas formas de exportar modulos: name export(respeitar os mesmos nomes na hora de exportar) o export tem que ser na parte final do bloco de código pois é lido da esquerda pra direita e de baixo para cima