import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { TitleComponent } from './components/common/title/title.component';
import { RouterModule } from '@angular/router';
import { HelloPageComponent } from './components/pages/hello-page/hello-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AuthorsComponent } from './components/pages/authors/authors.component';
import { VLineComponent } from './components/common/v-line/v-line.component';
import { WideButtonComponent } from './components/common/wide-button/wide-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoPageComponent } from './components/pages/todo-page/todo-page.component';
import { TodoItemComponent } from './components/common/todo-item/todo-item.component';
import { TodoInputComponent } from './components/common/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginPageComponent,
    TitleComponent,
    HelloPageComponent,
    RegisterPageComponent,
    AuthorsComponent,
    VLineComponent,
    WideButtonComponent,
    TodoPageComponent,
    TodoItemComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
