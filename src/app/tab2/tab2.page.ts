import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataservice : DataService) {
    this.ShowData = this.dataservice.isiData
  }

  ShowData : Observable<data[]>;

}
interface data{
  judul : string,
  isi : string,
  tanggal : string,
  nilainote : string 
}
