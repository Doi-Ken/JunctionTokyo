import { Component } from '@angular/core';
import { HttpService } from '../service/httpservice.service';
import { UserDto} from '../entity/user.dto';
import { UserSel } from '../entity/user.sel';
import { Session } from '../entity/session.data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../app.component.css']
})
export class InputComponent {
  systemTitle = 'Input';
  imgset;
  public imagesUrl;

  startDate : Date;
  endDate : Date;

  userDto : UserDto;
  requestUrl = "http://18.219.81.144:80/suggest";

  imageUrlList = [];
  resUrlList = [];
  boolList = new Array(57);
  okButtonClassList = [];

  constructor(private httpService: HttpService,
    public UserSel: UserSel,
    public session: Session,
    private router: Router){}


    ngOnInit(){
      this.onGetImgClick();
    }

    onGetImgClick(){
      this.imageUrlList = [];
      this.okButtonClassList = [];
      for (var i = 1; i < 58; i++) {
        this.imageUrlList.push('https://s3-ap-northeast-1.amazonaws.com/junction-1424/input/' + String(i) + '.jpg');
        this.okButtonClassList.push({
          'imgWrap' : true,
          'imgWrapOnClick' : false
        });
      }
      for (var i = 0; i < 57; i++) {
        this.boolList[i] = false;
      };
      console.log(this.boolList);
    }

  manageList(num : number){

    this.boolList[num] = !this.boolList[num];
    this.okButtonClassList[num]["imgWrapOnClick"] = !this.okButtonClassList[num]["imgWrapOnClick"];
    console.log(this.boolList);
    console.log(num);

    let counter = 0;
    for(let i = 0; i < this.boolList.length;i++){
      if(this.boolList[i]){
        counter++;
      }
    }
    console.log(counter);
    if(counter > 4){
      this.sendUrlList();
    }

  }

  async sendUrlList() {
    this.resUrlList = [];
    this.UserSel.pathList = [];
    for (var i = 0; i < this.boolList.length; i++) {
      if (this.boolList[i]) {
        // this.resUrlList.push(this.imageUrlList[i]);
        this.UserSel.pathList.push(this.imageUrlList[i]);
      }
    }
    let sendData = this.UserSel;
    
    await this.getSession(sendData);
    console.log(this.resUrlList);
    //send url list
      console.log(this.okButtonClassList[3]["imgWrapOnClick"]);
      this.router.navigate(['/picture']);
      
    }

    async getSession(sendData : UserSel){
      let session = await this.httpService.post(this.requestUrl, JSON.stringify(sendData));
      console.log(session["message"]["session_id"]);
      this.session.session = session["message"]["session_id"];
    }
}
