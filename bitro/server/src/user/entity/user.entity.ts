import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn } from 'typeorm';

@Entity()
@Index(['userId', 'email'])
export class User {
  @PrimaryGeneratedColumn()
  userSeq: number;

  @Column({ length: 40, unique: true })
  userId: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 40, unique: true })
  email: string;

  @Column({ length: 256, unique: true })
  token: string;

  @CreateDateColumn()
  createdDt: Date;
}