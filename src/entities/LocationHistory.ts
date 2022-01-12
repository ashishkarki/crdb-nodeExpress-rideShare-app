import { Vehicle } from './Vehicle'
import {
  Entity,
  PrimaryColumn,
  Column,
  AfterLoad,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import moment from 'moment'

@Entity('location_history')
export class LocationHistory {
  @PrimaryColumn('uuid')
  id: string

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.locationHistory)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle

  @Column({ type: 'decimal', precision: 5, scale: 1 })
  latitude: number

  @Column({ type: 'decimal', precision: 5, scale: 1 })
  longitude: number

  @Column({ type: 'timestamp' })
  ts: string

  @AfterLoad()
  formatTime() {
    const pattern = 'YYYY-MM-DD HH:mm:ss'
    this.ts = moment(this.ts).format(pattern)
  }
}
