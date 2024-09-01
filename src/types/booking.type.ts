export interface Booking {
    _id: string;
    room: {
      name: string;
    };
    date: string;
    slots: {
      startTime: string;
      endTime: string;
    }[];
    isConfirmed: "confirmed" | "unconfirmed";
  }
  
  export interface MyBookingsResponse {
    data: Booking[];
  }

  export interface Slot {
    _id: string;
    date: string;
    startTime: string;
    endTime: string;
    isBooked?: boolean; 
  }
  