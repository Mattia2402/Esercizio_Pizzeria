import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent {

  constructor(private readonly r: Router){}

  lista(){
    this.r.navigate(["lista-form"]);
  }

  categorie(){
    this.r.navigate([""]);
  }

  info(){
    this.r.navigate(["info-form"])
  }

}
