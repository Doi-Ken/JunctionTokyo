import { Injectable } from '@angular/core';

@Injectable()
export class UserSel {

    pathList : string[];


    constructor() {
        this.pathList = [];
    }
}