import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import { OneDescriptionComponent } from './one-description/one-description.component';
import { BooknowComponent } from './booknow/booknow.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookedComponent } from './booked/booked.component';
import { ReviewComponent } from './review/review.component';
import { Review2Component } from './review2/review2.component';
import { Review3Component } from './review3/review3.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component'; 








const routes: Routes = [
  {path:'one',component:OneComponent},
  {path:'con',component:ContactComponent},
  {path:'abt',component:AboutusComponent},
  {path:'rv3',component:Review3Component},
  {path:'two',component:TwoComponent},
  {path:'review',component:ReviewComponent},
  {path:'booked',component:BookedComponent},
  {path:'rv2',component:Review2Component},
  {path:'bookmy',component:BookComponent},
  {path:'three',component:ThreeComponent},
  {path:'home',component:HomeComponent},
  {path:'oneDescription',component:OneDescriptionComponent},
  {path:'booknow',component:BooknowComponent},
  {path:'booktickets', component: BookticketComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    HomeComponent,
    OneDescriptionComponent,
    BooknowComponent,
    BookticketComponent,
    BookComponent,
    BookedComponent,
    ReviewComponent,
    Review2Component,
    Review3Component,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    BrowserAnimationsModule,MatButtonModule,MatCardModule,MatIconModule,MatFormFieldModule,MatInputModule,MatMenuModule,
    MatToolbarModule,MatSidenavModule,MatListModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
