import { LocationHistory } from './LocationHistory'
import { Entity, PrimaryColumn, Column, AfterLoad, OneToMany } from 'typeorm'
// import * as moment from "moment"
import moment from 'moment'

@Entity('vehicles')
export class Vehicle {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  battery: number

  @Column()
  in_use: boolean

  @Column()
  vehicle_type: string

  @OneToMany(
    () => LocationHistory,
    (locationHistory) => locationHistory.vehicle,
  )
  locationHistory: LocationHistory[]
}
