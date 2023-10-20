import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntitySchema } from "typeorm";

export class Geolocation {
    constructor(id, Latitude, Longitude) {
        this.id = id;
        this.Latitude = Latitude
        this.Longitude = Longitude
    }
}

export default new EntitySchema({
    // Nome da tabela
    name: 'Geolocation Table',
    // Seleciona a classe
    target: Geolocation,
    columns: {
        id: {
            // Chave primária
            primary: true,
            type: 'int',
            // Incrementa automaticamente
            generated: true,
        },
        Latitude: {
            type: 'number',
        },
        Longitude: {
            type: 'number',
        }
    }
})