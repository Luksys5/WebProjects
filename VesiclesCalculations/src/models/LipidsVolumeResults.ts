import { ILipidVolResult } from "./subModels/ILipidVolumeResult";

export default class LipidsVolResults
{
    lipids: ILipidVolResult[];

    lipidsMass: number;
    lipidsVol: number;
    calculated: boolean;
}