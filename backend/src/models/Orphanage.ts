import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
    
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;
    
    @Column()
    about: string;
    
    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;
    
    @Column()
    open_on_weekends: boolean;

    /* 
        Um orfanato tem várias imagens 
        1º parâmetro: uma função que devolve qual é o tipo de retorno
        2º parâmetro: dado a imagem que recebeu, qual é o campo desse imagem que retorna o relacionamento inverso
        3º parâmetro: cascade faz automático 
     */
    @OneToMany(() => Image, image=>image.orphanage, {
        cascade: ['insert','update']
    }) 
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}