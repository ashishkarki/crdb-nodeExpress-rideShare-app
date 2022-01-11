import { Application} from "express";
import { VehicleRouter } from "./api/vehicle";

export class RouterInit {
	// Inits each router file
	public static init(express: Application){
		VehicleRouter.init(express);
	}
}