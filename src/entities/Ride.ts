import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { User } from './User'
import { Vehicle } from './Vehicle'

@Entity('rides')
export class Ride {
  @PrimaryColumn('uuid')
  id: string

  @ManyToOne(() => Vehicle, (Vehicle) => Vehicle.rideList)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle

  @ManyToOne(() => User, (User) => User.rideList)
  @JoinColumn({ name: 'user_email' })
  user: User

  @Column({
    type: 'timestamp',
  })
  start_ts: String

  @Column({
    type: 'timestamp',
    default: null,
  })
  end_ts: String
}
