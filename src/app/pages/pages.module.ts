import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: 'tea-list', component: TeaListComponent,},
  {path: 'tea-detail', component: TeaDetailComponent,},
  {path: '**', redirectTo: 'tea-list'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
