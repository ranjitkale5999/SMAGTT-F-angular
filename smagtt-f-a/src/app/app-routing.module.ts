import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user/user.component';
import { UserAddComponent } from './components/usermodule/user-add/user-add.component';

const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
     {path: 'home', component: UserComponent},
     {path: 'user_add', component: UserAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
