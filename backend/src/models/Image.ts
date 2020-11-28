import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    /*
        Várias imagens pertencem somente a um orfanato
    */
    @ManyToOne(() => Orphanage, orphanage=>orphanage.images) 
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}