import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    notes: Array<Note> = [];
    note: Note = new Note();
    errMessage: string;
    constructor(private noteservice:NotesService){


    }
    
    ngOnInit(){
      this.noteservice.getNotes().subscribe(
      data=>{
        this.notes=data;
      },
      error=>{
        //console.log(error);//for failure
        this.errMessage=error.message;

      })
    }

    addNote(){
      //console.log(this.note);
      if(this.note.text==="" || this.note.title==="")
      {
        this.errMessage='Title and Text both are required fields';
      }
      this.noteservice.addNote(this.note).subscribe(
        data=>{
          
            this.notes.push(data);
          
        },
        error=>{
          this.errMessage=error.message;
      
        }
      )
      this.note=new Note();
    }
}
