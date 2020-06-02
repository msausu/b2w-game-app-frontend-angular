
export class Planet {

    public id: string;

    constructor(public nome: string, public clima?: string, public terreno?: string, public numFilm?: number, id?: string) {
        if (id) {
            this.id = id;
        } else {
            this.id = "" + Math.floor((Math.random() * 100000) + 1);
        }       
    }

    get _id() {
        return this.id;
    }

    set _id(id: string) {
        this.id = id;
    }

    toString(): string {
        return "{id:" + this.id + ", nome: " + this.nome + "};"
    }
}
