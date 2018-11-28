import { ILipidMolWResult } from "./subModels/ILipidMolWResult";

export default class LipidsMolWResults {
   data: ILipidMolWResult[];
   calculated: boolean;
   
   constructor() {
       this.data = [];
       this.calculated = false;
   }
}