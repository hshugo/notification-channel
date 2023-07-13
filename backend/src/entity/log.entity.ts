import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Log {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column('datetime', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })  
    created_at: Date;   

}
