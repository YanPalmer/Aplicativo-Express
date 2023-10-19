import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class Geolocation {
    @PrimaryGeneratedColumn()
    id;

    @Column()
    Latitude;
    
    @Column()
    Longitude;
}