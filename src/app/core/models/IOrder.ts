import {EquipmentItem} from "./IEquipmentItem";

export interface IOrder{
  start?: string;
  end?: string;
  orderEquipment?: EquipmentItem[];
}

export class Order implements IOrder{
  constructor(public start?: string,
              public end?: string,
              public orderEquipment?: EquipmentItem[]
  ) {}
}
