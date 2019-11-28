import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HelloPageComponent} from './components/pages/hello-page/hello-page.component';
import {LoginPageComponent} from './components/pages/login-page/login-page.component';
import {RegisterPageComponent} from './components/pages/register-page/register-page.component';
import {AuthorsComponent} from './components/pages/authors/authors.component';
import {TodoPageComponent} from './components/pages/todo-page/todo-page.component';


const routes: Routes = [
  {path: '', component: HelloPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'todo', component: TodoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
