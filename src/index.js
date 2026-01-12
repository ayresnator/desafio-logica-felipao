let nomeHeroi = "Dr. Arroganto";
let quantidadeXP = 12000;
let nivel;

if (quantidadeXP < 1000) {
  nivel = "Ferro";
} else if (quantidadeXP >= 1000 && quantidadeXP < 2000) {
  nivel = "Bronze";
} else if (quantidadeXP >= 2000 && quantidadeXP < 5000) {
  nivel = "Prata";
} else if (quantidadeXP >= 5000 && quantidadeXP < 7000) {
  nivel = "Ouro";
} else if (quantidadeXP >= 7000 && quantidadeXP < 8000) {
  nivel = "Platina";
} else if (quantidadeXP >= 8000 && quantidadeXP < 9000) {
  nivel = "Ascendente";
} else if (quantidadeXP >= 9000 && quantidadeXP < 10000) {
  nivel = "Imortal";
} else if (quantidadeXP >= 10000) {
  nivel = "Radiante";
}

console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel}`);
