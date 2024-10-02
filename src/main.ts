import { Cadeira } from './Cadeira';
import { Sofa } from './Sofa';
import { MesaDeCentro } from './MesaDeCentro';

const cadeiraVitoriana = new Cadeira("vermelho", "Vitoriano", "madeira", 500);
const sofaVitoriano = new Sofa("vermelho", "Vitoriano", "madeira", 1200);
const mesaModerna = new MesaDeCentro("redonda", "vidro", 0.5, 300);

console.log("A cadeira combina com o sofá? ", cadeiraVitoriana.combinaCom(sofaVitoriano));
console.log("A cadeira combina com a mesa? ", mesaModerna.combinaCom(cadeiraVitoriana));
console.log("Preço da cadeira com desconto de 10%: R$", cadeiraVitoriana.calcularDesconto(10));
console.log("Preço do sofá com frete de R$200: R$", sofaVitoriano.calcularPrecoComFrete(200));
console.log("Área da mesa: ", mesaModerna.calcularArea());

