import { Component } from '@angular/core';
import { HttpService } from '../service/httpservice.service';
import { UserDto} from '../entity/user.dto';
import { SuggestionWebDto } from '../entity/suggestionlist.webdto';
import { Session } from '../entity/session.data';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['../app.component.css']
})
export class PictureComponent {

  systemTitle = 'Picture';
  imgset;
  public imagesUrl;

  outboundDate : Date;
  inboundDate : Date;
  adults : number;

  


  inputRecommendFlag : boolean = false;

  requestUrl = "http://18.219.81.144:80/plan";

  imageUrlList = [];


  constructor(private httpService: HttpService,
    public suggestionDto: SuggestionWebDto,
    public userDto: UserDto,
    public session: Session){}


    ngOnInit(){
      this.imgset = this.session.session;
      this.onGetImgClick();
      this.outboundDate = new Date();
      this.inboundDate = new Date();
    }

  onGetImgClick(){
      this.imageUrlList = [];
      for (var i = 0; i < 20; i++) {
        this.imageUrlList.push('https://s3-ap-northeast-1.amazonaws.com/junction-1424/' + this.imgset + '/' + String(i) + '.jpg');
      }
    }

  onFileClick(num : number){


    console.log(num);

    this.userDto.path = this.imageUrlList[num];

    let sendData = this.userDto;

    let inboundDate = new Date(this.inboundDate.toString());
    let outboundDate = new Date(this.outboundDate.toString());
    
    let inboundDateString = inboundDate.getFullYear()
                          + "-"
                          + (inboundDate.getMonth() + 1 < 10 ? ("0" + (inboundDate.getMonth() + 1)) : (inboundDate.getMonth() + 1)) 
                          + "-"
                          + (inboundDate.getDate() < 10 ? ("0" + (inboundDate.getDate())) : (inboundDate.getDate()));
    let outboundDateString = outboundDate.getFullYear()
                          + "-"
                          + (outboundDate.getMonth() + 1 < 10 ? ("0" + (outboundDate.getMonth() + 1)) : (outboundDate.getMonth() + 1))
                          + "-"
                          + (outboundDate.getDate() < 10 ? ("0" + (outboundDate.getDate())) : (outboundDate.getDate()));

    this.userDto.inboundDate = inboundDateString;
    this.userDto.inboundDate = '';
    this.userDto.outboundDate = outboundDateString;
    

    this.getSuggestion(sendData);

    console.log(this.userDto.inboundDate);
    console.log(this.userDto.outboundDate);

  }

  async getSuggestion(sendData : UserDto){
    let suggestionList = await this.httpService.post(this.requestUrl, JSON.stringify(sendData));
    this.inputRecommendFlag = true;
    
    
    let dataLength = this.suggestionDto.suggestionList.length;
    for(var i = 0; i < dataLength; i++){
      this.suggestionDto.suggestionList.pop();
    }

    if(suggestionList["message"][0]["Error"] == undefined){
    for(var num in suggestionList["message"]){
      this.suggestionDto.suggestionList.push(suggestionList["message"][num]);   
    }
  }
   

  }

}
