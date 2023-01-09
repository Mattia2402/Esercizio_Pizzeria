import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent {

  constructor(private readonly r: Router){}

  invia(data:any){
    this.r.navigate(["lista-form"],{queryParams:{data:data}})
  }

}
