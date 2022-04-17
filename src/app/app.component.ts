import { Component } from '@angular/core';
import { Comments } from './classes/comments';
import { freeApiService } from './services/freeapi.service';
import { Posts } from './classes/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicalling';

  constructor(private _freeApiService: freeApiService){

  }

  lstcomments:Comments[] | undefined;

  lstPosts:Posts[] | undefined;
  objPosts:Posts | undefined;

  ngOnInit(){

    this._freeApiService.getcomments()
    .subscribe(            //api will be invoked by subscribe method
      data=>               //result returned from api will come in data section
      {
        this.lstcomments=data;
      }
    );

    this._freeApiService.getcommentsbyparameter()
    .subscribe
    (
      data=>
      {
        this.lstPosts = data;
      }
    );

    //For POST

    var opost = new Posts();
    opost.body = 'testbody';
    opost.title = 'testtitle';
    opost.userId = 5;

    this._freeApiService.post(opost)
    .subscribe(
      data=>

      {
        this.objPosts = data;

      }
    )
  }
}
