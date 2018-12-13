import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookFormComponent} from './book-list/book-form/book-form.component';
import {SingleBookComponent} from './book-list/single-book/single-book.component';




const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
 { path: 'auth/signin', component: SigninComponent },
 { path: 'books', component: BookListComponent },
 { path: 'books/new', component: BookFormComponent },
  { path: 'books/view/:id', component: SingleBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
 { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  //  RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
