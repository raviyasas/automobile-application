import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('vehicle')
@ObjectType()
export class Vehicle{

    @Field(type => Int)
    @PrimaryColumn()
    private id: number;

    @Field(type => String, { nullable: true })
    @Column('varchar')
    private make: string;

    @Field(type => String, { nullable: true })
    @Column('varchar')
    private model: string;

    @Field(type => Int, {nullable: true})
    @Column('varchar')
    private year: string;

    @Field(type => String, { nullable: true })
    @Column('varchar') 
    private engineNumber: string;

}