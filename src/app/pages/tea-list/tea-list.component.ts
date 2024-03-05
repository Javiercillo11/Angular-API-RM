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
  filteredData: any[] = [];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5;
  pageIndex = 0;
  searchTerm: string = '';

  constructor(private apiService: UserInfoService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(): void {
    this.apiService.getData().subscribe((data: any[]) => {
      this.data = data;
      this.filteredData = data;
    });
  }

  getPaginatedData(): any[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredData.slice(startIndex, endIndex);
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  filterData(): void {
    this.filteredData = this.data.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.pageIndex = 0;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      case 'unknown':
        return 'grey';
      default:
        return 'black';
    }
  }

}
