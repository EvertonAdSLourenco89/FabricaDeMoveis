// src/Sofa.ts
import { Cadeira } from './Cadeira';

export class Sofa {
    cor: string;
    estilo: string;
    material: string;
    preco: number;

    constructor(cor: string, estilo: string, material: string, preco: number) {
        this.cor = cor;
        this.estilo = estilo;
        this.material = material;
        this.preco = preco;
    }

    calcularPrecoComFrete(frete: number): number {
        return this.preco + frete;
    }

    combinaCom(cadeira: Cadeira): boolean {
        return this.estilo === cadeira.estilo;
    }
}
