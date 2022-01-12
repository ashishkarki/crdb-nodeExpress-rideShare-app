import { Ride } from './Ride'
import { type } from 'os'
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { runInDebugContext } from 'vm'

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  email: string

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column('string', { array: true })
  phone_numbers: string[]

  @OneToMany((type) => Ride, (ride) => ride.user)
  rideList: Ride[]
}
