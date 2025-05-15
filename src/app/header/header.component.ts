import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(){
    console.log("Constructor ejecutado");
  }
  ngOnInit(): void {
      console.log("On Init ejecutado")
  }
}
