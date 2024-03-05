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
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5;
  pageIndex = 0;

  constructor(private apiService: UserInfoService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.apiService.getData().subscribe((data: any[]) => {
      this.data = data;
      console.log(data);
    });
  }

  getPaginatedData(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    // Puedes recargar los datos según sea necesario
  }


}
