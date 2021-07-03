
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('vehicle')
export class Vehicle{

    @PrimaryColumn()
    private id: number;

    @Column
    private make: string;

    private model: string;

    private year: number;

    private engineNumber: string;

}