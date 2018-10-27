import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesComponent } from './messages/messages.component';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'profile', component: ProfileComponent }
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];  
//   {
//     path: 'books',
//     component: BookComponent,
//     data: { title: 'Book List' }
//   },
//   {
//     path: 'book-details/:id',
//     component: BookDetailComponent,
//     data: { title: 'Book Details' }
//   },
//   {
//     path: 'book-create',
//     component: BookCreateComponent,
//     data: { title: 'Create Book' }
//   },
//   {
//     path: 'book-edit/:id',
//     component: BookEditComponent,
//     data: { title: 'Edit Book' }
//   },
//   { path: '',
//     redirectTo: '/profile',
//     pathMatch: 'full'
//   },
//   {
//     path: 'messages',
//     component: MessagesComponent,
//     data: { title: 'Messages' }
//   },
//   {
//     path: 'gamestats',
//     component: MessagesComponent,
//     data: { title: 'GameStats' }
//   },
//   {
//     path: 'profile',
//     component: ProfileComponent,
//     data: { title: 'Profile' }
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    MessagesComponent,
    ProfileComponent,
    ChallengeComponent,
    LeaderboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
