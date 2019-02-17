import { Injectable } from '@angular/core';

@Injectable()
export class Session {

    session : number;


    constructor() {
        this.session = 0;
    }
}