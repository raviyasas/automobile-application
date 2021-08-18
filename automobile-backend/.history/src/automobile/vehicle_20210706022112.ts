import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('vehicle')
@O
export class Vehicle{

    @PrimaryColumn()
    private id: number;

    @Column('varchar')
    private make: string;

    @Column('varchar')
    private model: string;

    @Column('integer')
    private year: number;

    @Column('varchar')
    private engineNumber: string;

}