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


