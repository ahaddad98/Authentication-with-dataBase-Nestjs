import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Entity, BaseEntity } from 'typeorm';

@Entity()
export  class User_ent extends BaseEntity  {
    @PrimaryGeneratedColumn('uuid')
    id:  number;
    @Column()
    username: string;
    @Column()
    password: string;
}