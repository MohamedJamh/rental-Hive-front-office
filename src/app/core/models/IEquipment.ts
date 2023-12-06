import {EquipmentFamily} from "./EquipmentFamily";

export interface IEquipment{
    id? : number;
    name? : string;
    quantity? : number;
    equipmentFamily : EquipmentFamily;
}

export class Equipment implements IEquipment{
    constructor(
        public id? : number,
        public name? : string
        ,public quantity? : number,
        public equipmentFamily : EquipmentFamily = new EquipmentFamily()
    ){}
}
