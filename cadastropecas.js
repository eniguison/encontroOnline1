let pecas = ["Peça1", "Peça2", "Peça3", "Peça4", "Peça5"];
let pecapeso = 110;

if (pecas.length<10){
    if (pecas[1].length>3){
          if (pecapeso>100){
              console.log("Cadastro realizado com sucesso!");
          }else{
              console.log("Erro de cadastro, peça deve ter mais de 100g!");
          }

    }else{
        console.log("Erro de cadastro, nome da peça deve possuir mais de 3 caracteres!");
    }

}else{
    console.log("Número de peças máximo, não é possível cadastrar!");
}