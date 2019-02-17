import { Component } from '@angular/core';
import { SuggestionWebDto } from '../entity/suggestionlist.webdto';
import { UserDto} from '../entity/user.dto';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['../app.component.css']
})
export class RecommendComponent {
  constructor(public suggestionDto: SuggestionWebDto,
    public userDto: UserDto){
    console.log(this.suggestionDto.suggestionList[0]);
    console.log(this.suggestionDto.suggestionList[1]);
    console.log(this.suggestionDto.suggestionList[2]);
    console.log(this.userDto.currency);
  }

  goToUrl(num: number){
    window.open(this.suggestionDto.suggestionList[num].DeeplinkUrl, '_blank');
  }


}
