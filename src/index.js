let nomeHeroi = "Sr. Arroganto";
let quantidadeXP = 10000;

switch (quantidadeXP) {
  case quantidadeXP <1000: "Ferro"
  break;
  case quantidadeXP >=1000 && quantidadeXP <2000: "Bronze"
  break;
  case quantidadeXP >=2000 && quantidadeXP <5000: "Prata"
  break;
  case quantidadeXP >=5000 && quantidadeXP <7000: "Ouro"
  break;
  case quantidadeXP >=7000 && quantidadeXP <8000: "Platina"
  break;
  case quantidadeXP >=8000 && quantidadeXP <9000: "Ascendente"
  break;
  case quantidadeXP >=9000 && quantidadeXP <10000: "Imortal"
  break;
  case quantidadeXP >=10000: "Radiante"
  default: "Desconhecido"
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${quantidadeXP}`)