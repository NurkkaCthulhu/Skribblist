import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { PublicListsComponent } from './public-lists/public-lists.component';
import { CreateListComponent } from './create-list/create-list.component';

const routes: Routes = [
  { path: 'lists', component: PublicListsComponent },
  { path: 'create', component: CreateListComponent },
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
