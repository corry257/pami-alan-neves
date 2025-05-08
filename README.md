# Primeiro dia de aula - 06/02/2025

Aula de apresentação da disciplina, o professor abriu a ementa do curso no data show e leu junto com a turma. 

**Um breve resumo da ementa:**

**Competências** 
- Projetar aplicativos selecionando linguagens de programação e ambiente de desenvolvimento. 

**Habilidades**
- Codificar aplicativos para dispositivos móveis; 
- Utilizar ambientes de desenolvimento de software mobile;
- Construir interface gráfica para aplicativos mobile;
- Utilizar recursos de aparelhos celulares e tablets. 

**Bases tecnológicas**

  - Arquiteturas e plataformas de mercado;
  - Modelos de desenvolvimento:
     * *Nativo multiplataforma - React Native.* 
     * *Hibrido - App inventor*
  - Lojas de aplicativos.

**Conceitos do modelo e plataforma de desenvolvimento**

  - Filosofia de arquitetura;
  - Fundamentos da plataforma;
  - Ciclo de vida e processo de desenvolvimento;
  - Ferraments (SDK, IDE/CLI, emuladores entre outros.);
  - Configuração do aplicativo e permissões. 

**Interface com o usuário**

  - Layouts e estlização;
  - Componentes:
     * *Texto, botões, imagens, listas, componenetes para entrada de dados.* 
  - Splash, diálogos e notificações;
  - Navegação e roteamento. 

**Armazenamento de dados no lado cliente**

  - Gerencimento de estado dos componenetes; 
  - Armazenamento de dados offline. 


# Aula 02 - 20/02/2025

Nesta aula o professor disponibilizou uma apostila que ensinava como fazer uma calculadora para android no site appinventor, ao fim da aula consegui finalizar a calculadora e baixar o apk para rodar no celular, no meu caso rodei em um emulador chamado bluestacks. 

# Aula 03 - confirmar data depois

## Aula de JS - 01

O professor deu uma introdução de como começar a programar em js mostrando alguns comandos iniciais da linguagem.

### códigos passados em aula 

Arquivo: ola.js

```js
console.log("olá mundo!");

var msg = "Eu quero um nintendo switch 2!";
console.log(msg);

let resposta  = "meus alunos são lindos! #SW2";
console.log(resposta);

const turma = "eu ♥ o 2DS";
console.log(turma);

resposta = "me comprem um switch 2, por favor?";
console.log(resposta);

// turma = "teste";    variaveis do tipo constante não podem receber dois valores em linhas diferentes
// console.log(turma);
```

Arquivo: numeros.js

```js
let n1 = 2;
let n2 = 5;

console.log(n1);
console.log(n1, n2);
console.log(n1 + n2);

let soma = n1 + n2;
console.log(`${n1} + ${n2} = ${soma}`);

let subtracao = n1 - n2;
console.log(`${n1} - ${n2} = ${subtracao}`);

let multiplicacao = n1 * n2;
console.log(`${n1} x ${n2} = ${multiplicacao}`);

let divisao = n1 / n2;
console.log(`${n1} / ${n2} = ${divisao}`);

let potencia = Math.pow(n1, n2);
console.log(`${n1} ^ ${n2} = ${potencia}`);
```

Arquivo: concatenar.js

```js
let palavra01 = "quero";
let palavra02 = "um";
let palavra03 = "switch 2!";

console.log(palavra01, palavra02, palavra03);
console.log(palavra01 + palavra02 + palavra03);
console.log(`${palavra01} ${palavra02} ${palavra03}♥
            \n ♥♥♥♥♥`);
```

# Aula 04 - confirmar data depois

## Aula JS - 02 

Professor continou a passar comandos iniciais da linguagem js, passou um exercício de funções e também mostrou como baixar e fazer configurações iniciais no framework **expo**. 

### Códigos pasados em aula

Arquivo: funcoes.js

```js
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
```

### Exercício

Exercício consiste em definir inputs de médias para alunos  
Após preencher os inputs o programa deve definir se estão aprovados ou não exibindo o resultado conforme as instruções a seguir:

- médias maiores que 6 aprovam os alunos;
- médias menores que 6 mas superiores a 4 deixam os alunos de recuperação; 
- médias menores que 4 reprovam os alunos. 

**Resolução**  
  
```js
a1 = 5;
a2 = 5;
a3 = 7;
a4 = 6;

function media (n1, n2, n3, n4){
    let resultado= (n1+n2+n3+n4)/4
   if(resultado >= 6.00){
    console.log(`sua media foi ${resultado} e você está aprovado`);
   }if (resultado >= 4.00 && resultado < 6.00){
    console.log(`sua media foi ${resultado} e você está em recuperação`);
   }if(resultado < 4.00){
    console.log(`sua media foi ${resultado} e você reprovado`);
  
   }
}

media(a1,a2,a3,a4);

// exemplo do professor

const mediajoao = (n1,n2,n3,n4) =>{
let media = (n1+n2+n3+n4)/4
if (media < 4.00){
    return "reprovado"
} else if (media < 6.00){
    return "recuperação"
} else {
    return "aprovado"
}

console.log(mediajoao);

}

//exemplo de mercado

const mediaMercado = (n1,n2,n3,n4) => {
   let media = (n1+n2+n3+n4)/4

if (media < 4.00){
    return "reprovado"
}if (media < 6.00){
    return "recuperação"
}
return "aprovado"
}
```

# Aula 05 - confirmar datas 

Profesor deu continuidade nas ferramentas do framework expo (detalhar mais depois) 

# Aula 06 - 08/05/2025


