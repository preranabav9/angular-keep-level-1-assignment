import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NotesService } from './notes.service';


@NgModule({
  declarations: [ 
    HeaderComponent,
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ NotesService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
