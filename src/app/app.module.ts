/*nativos*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

/*criados*/
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { EstafetaComponent } from './estafeta/estafeta.component';


/*material design*/
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    EstafetaComponent
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    MatSliderModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
