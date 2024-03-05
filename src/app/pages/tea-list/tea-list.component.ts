import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UserInfoService } from 'src/app/data/user-info.service';
import { ApiResponse } from 'src/app/data/user-info.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss']
})
export class TeaListComponent implements OnInit{
  @ViewChild(MatMenuTrigger) statusMenuTrigger!: MatMenuTrigger;
  data: any[] = [];
  filteredData: any[] = [];
  pageSizeOptions: number[] = [5, 10, 20];
  pageSize = 5;
  pageIndex = 0;
  searchTerm: string = '';
  filteredData2: any[] = [];

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

  filterByStatus(status: string): void {
    if (status === 'Todos') {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter(item => item.status.toLowerCase() === status.toLowerCase());
    }
    this.pageIndex = 0;
  }

  filterByType(species: string): void {
    if (species === 'Todos') {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter(item => item.species.toLowerCase() === species.toLowerCase());
    }
    this.pageIndex = 0;
  }

  toggleMenu(): void {
    this.statusMenuTrigger.toggleMenu();
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
