import { ILipidVolResult } from "./subModels/ILipidVolumeResult";

export default class LipidsVolResults
{
    lipids: ILipidVolResult[];
    totalMass: number;
    totalVolume: number;
    calculated: boolean;
}