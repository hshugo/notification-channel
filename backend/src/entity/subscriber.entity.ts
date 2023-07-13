import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./category.entity";
import { Channel } from "./channel.entity";

@Entity()
export class Subscriber {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    email: string

    @Column()
    phone: number

    @ManyToMany(() => Category)
    @JoinTable({
        name: 'subscriber_category',
        joinColumn: { name: 'category_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'subscriber_id', referencedColumnName: 'id' }
    })
    categories: Category[]

    @ManyToMany(() => Channel)
    @JoinTable({
        name: 'subscriber_channel',
        joinColumn: { name: 'channel_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'subscriber_id', referencedColumnName: 'id' }
    })
    channels: Channel[]

}
