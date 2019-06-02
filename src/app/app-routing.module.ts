import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CardsComponent } from './cards/cards.component';
import { ManageCardsComponent } from './admin/manage-cards/manage-cards.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    component: HomeComponent
  }
  ,
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/cards',
    component: ManageCardsComponent
  },
  {
    path: 'cards/:id',
    component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
