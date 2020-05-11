import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { PublicListsComponent } from './public-lists/public-lists.component';

const routes: Routes = [
  { path: 'lists', component: PublicListsComponent },
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
