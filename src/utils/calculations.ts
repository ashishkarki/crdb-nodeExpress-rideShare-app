const { greatCircleDistance } = require("great-circle-distance");
/**
 * Helper functions to calculate distance and velocity on rides
 */
export class Calculations {
    
    public static calculate_distance(data: any): any
    {
        const coords = {
            lat1: data.latitude1,
            lng1: data.longitude1,
            lat2: data.latitude2,
            lng2: data.longitude2
        };
         
        const distance = greatCircleDistance(coords)
        return distance.toFixed(2);
    }

    public static calculate_duration_minutes(data: any): any
    {
        const startTime = new Date(data.startTime);
        const endTime = new Date(data.endTime);
        const totalTime = endTime.valueOf() - startTime.valueOf();
        return (totalTime / 60000).toFixed(2);
        
    }

    public static calculate_duration_hours(data: any): any
    {
        const startTime = new Date(data.startTime);
        const endTime = new Date(data.endTime);
        const totalTime = endTime.valueOf() - startTime.valueOf();
        return ((totalTime / 60000) / 60).toFixed(2);
    }

    public static calculate_velocity(data: any): any
    {
        const distanceTraveled = data.distance;
        const duration = this.calculate_duration_hours({
            startTime:data.startTime, 
            endTime:data.endTime
        })
        if (duration == 0) {
            return 0;
        }
        return (distanceTraveled/duration).toFixed(2);
    }
}