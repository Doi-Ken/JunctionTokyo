import { Injectable } from '@angular/core';
import { Suggestion } from "./suggestion.data";

@Injectable()
export class SuggestionWebDto {
    id: number; 
    suggestionList: Suggestion[];
    
    constructor(){
        this.id = 0;
        this.suggestionList = [];
    }

}