export type IRoom = {
    name: string;
    roomNo: number;
    floorNo: number;
    capacity: number;
    pricePerSlot: number;
    amenities: string[];
    isDeleted?: boolean;
    image?:string[]; 
    _id:string
  }

  