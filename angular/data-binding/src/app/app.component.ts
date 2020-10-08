import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ListaCurso : Array<String> = [
    "Lista 1", 
    "Lista 2", 
    "Lista 3", 
    "Lista 4", 
    "Lista 5"
  ];
  
  ListaProfessor : Array<String> = [
    "Lista 1", 
    "Lista 2", 
    "Lista 3", 
    "Lista 4", 
    "Lista 5"
  ];
}
