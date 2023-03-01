import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Textdavinci003Component } from './textdavinci003/textdavinci003.component';
import { ImagesgenerationComponent } from './imagesgeneration/imagesgeneration.component';
import { Textdavinciedit001Component } from './textdavinciedit001/textdavinciedit001.component';
import { ModerationsComponent } from './moderations/moderations.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'textdavinci003', component: Textdavinci003Component },
  { path: 'imagesgeneration', component: ImagesgenerationComponent },
  { path: 'textdavinciedit001', component: Textdavinciedit001Component },
  { path: 'moderations', component: ModerationsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Textdavinci003Component,
    ImagesgenerationComponent,
    Textdavinciedit001Component,
    ModerationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
