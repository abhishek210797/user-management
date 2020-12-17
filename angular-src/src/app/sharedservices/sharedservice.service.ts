import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SharedserviceService {
      dataarray=[];

    //  private_url: string = 'E:\project\project\MEANSTACKAPP\angular-src\src\app\components\db.json';
      _url: string;

  constructor(
    private http:Http
  ) { }

  getData()
  {
   return this.http.get('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false').map(res=>
      {
        return res.json()
      })

      //return this.http.get(this._url);
  }

}
