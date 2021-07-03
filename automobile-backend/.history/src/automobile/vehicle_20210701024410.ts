
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('vehicle')
export class Vehicle{

    @PrimaryColumn()
    private id: number;

    @Column('varchar')
    private make: string;

    @Column('varchar')
    private model: string;

    
    private year: number;

    @Column('varchar')
    private engineNumber: string;

}