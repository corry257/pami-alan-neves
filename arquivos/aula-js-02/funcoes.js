function SomaSimples(){
    return 3 + 4 
}

console.log(SomaSimples())

function SomaComParametros(n1, n2){
    return n1 + n2 
}

console.log(SomaComParametros(8, 4))
console.log(SomaComParametros(10, 4))

//função anonima 
//Arrow Functtion
const Potencia = (n, e) => {
    let result = Math.pow(n, e)
    console.log(`${n} elevado a ${e} é ${Math.pow(n, e)}`)
}

Potencia(3, 2)

//função que calcula a média do aluno e exiba o resultado 
//média >= 6,00 = Aprovado 
//média >= 4,00 || < 6,00 Recuperação 
//média < 4,00 = Reprovado

//méda é soma / quantidade

     const resultado = (n1, n2, n3, n4) => {
        let media = (n1 + n2 + n3 +n4) / 4 

        if (media >= 6.00) 
            return "Aprovado"
        if (media >= 4.00) 
          return "Recuperação"
        return "Reprovado"
    }

    console.log(resultado(6, 7))
