import { BaseEntity, PrimaryGeneratedColumn, Column, Unique, Entity } from 'typeorm';
import { Construct } from 'src/shared/construct';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  constructor(init: Construct<User>) {
    super();
    Object.assign(this, init)
  }

  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  readonly username: string;

  @Column()
  readonly password: string;

  @Column()
  readonly salt: string;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

}
