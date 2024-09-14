// src/MesaDeCentro.ts
import { Cadeira } from './Cadeira';

export class MesaDeCentro {
    formato: string;
    material: string;
    altura: number;
    preco: number;

    constructor(formato: string, material: string, altura: number, preco: number) {
        this.formato = formato;
        this.material = material;
        this.altura = altura;
        this.preco = preco;
    }

    calcularArea(): number {
        if (this.formato === 'retangular') {
            return this.altura * 1.2; 
        }
        return 0;
    }

    combinaCom(cadeira: Cadeira): boolean {
        return this.material === cadeira.material;
    }
}
