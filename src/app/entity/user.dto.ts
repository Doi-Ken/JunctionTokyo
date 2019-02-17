import { Injectable } from '@angular/core';

@Injectable()
export class UserDto {

    country : string; // User's country
    currency : string; // USD or JPY
    locale : string; // language
    outboundDate : string; // department date
    adults : number; // number of accompany
    inboundDate : string; // arrival date
    path : string;
    

    constructor() {
        // 初期化処理
        this.country = 'US';
        this.currency = 'USD';
        this.locale = 'en_US';
        this.outboundDate = "2019-03-01";
        this.adults = 1;
        this.inboundDate = "2019-03-05";
        this.path = "https://s3-ap-northeast-1.amazonaws.com/junction-1424/0/2.jpg";
    }
}