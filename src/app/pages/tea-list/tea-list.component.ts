import { Component, OnInit, inject } from '@angular/core';
import { UserInfoService } from 'src/app/data/user-info.service';
import { ApiResponse } from 'src/app/data/user-info.service';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss']
})
export class TeaListComponent implements OnInit{
  data: any[] = [];

  constructor(private apiService: UserInfoService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }


}
