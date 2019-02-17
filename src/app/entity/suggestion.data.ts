import { Injectable } from '@angular/core';

@Injectable()
export class Suggestion {

    Price : number; 
    DeeplinkUrl : string; 
    OutboundDept : Date;
    OutboundArrival : Date;
    CarrierName : string; 
    CarrierImageUrl : string;
    InboundDept : Date;
    InboundArrival : Date;
    

    constructor(Price: number, DeeplinkUrl: string, 
        OutboundDept: Date, OutboundArrival: Date, 
        CarrierName: string, CarrierImageUrl: string,
        InboundDept: Date, InboundArrival: Date) {
        // 初期化処理
            this.Price = Price;
            this.DeeplinkUrl = DeeplinkUrl;
            this.OutboundDept = OutboundDept;
            this.OutboundArrival = OutboundArrival;
            this.CarrierName = CarrierName;
            this.CarrierImageUrl = CarrierImageUrl;
            this.InboundDept = InboundDept;
            this.InboundArrival = InboundArrival;

    }
}