
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('vehicle')
export class Vehicle{

    @PrimaryColumn()
    private id: number;

    private make: string;

    private model: st

}