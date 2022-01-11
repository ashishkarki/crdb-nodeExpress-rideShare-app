import { Entity, PrimaryColumn, Column, AfterLoad } from 'typeorm'
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

  @Column()
  last_latitude: number

  @Column()
  last_longitude: number

  @Column({ type: 'timestamp' })
  last_checkin: string

  @AfterLoad()
  formatTime() {
    const pattern = 'YYYY-MM-DD HH:mm:ss'
    this.last_checkin = moment(this.last_checkin).format(pattern)
  }
}
