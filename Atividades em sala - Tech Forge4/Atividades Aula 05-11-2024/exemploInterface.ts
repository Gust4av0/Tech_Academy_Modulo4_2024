interface Carro {
    marca: string;
    pecasModificas: string[];
    cor: string;
    tracaoTrazeira: boolean;
    podeTurbinar: () => boolean;

}

class CarroChevete implements Carro {
    public marca: string;
    public pecasModificas: string[];
    public cor: "Prata";
    public tracaoTrazeira: boolean;

    constructor(marcaChevete: string, pecasModificasChevete: string[], tracaoTrazeiraChevete: boolean){
        this.marca = marcaChevete;
        this.pecasModificas = pecasModificasChevete;
        this.tracaoTrazeira = tracaoTrazeiraChevete;
    }

    public podeTurbinar(): boolean {
        const carroPodeTurbinar = this.pecasModificas.includes["turbao"];
        return carroPodeTurbinar;
    }

}

const primeiroCarro = new CarroChevete("Chevrolet", ["Full Tech", "Turbao"], true);
const podeTurbinar = primeiroCarro.podeTurbinar();
console.log("Primeiro carro pode turbinar? ", podeTurbinar)