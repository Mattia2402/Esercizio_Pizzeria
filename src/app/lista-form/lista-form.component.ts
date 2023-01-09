import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pizza } from '../pizza';

@Component({
  selector: 'app-lista-form',
  templateUrl: './lista-form.component.html',
  styleUrls: ['./lista-form.component.scss']
})
export class ListaFormComponent {

  pizza: pizza[] = [
    {"Nome":"Margherita","Lattosio":true,"Impasto":"Normale"},
    {"Nome":"Marinara","Lattosio":false,"Impasto":"Normale"},
    {"Nome":"Margherita","Lattosio":true,"Impasto":"Kamuth"},
    {"Nome":"Prosciutto e funghi","Lattosio":true,"Impasto":"Integrale"}
  ];

  latSelect!: string;
  impSelect!: string;
  dato:any;

  constructor(private readonly r: ActivatedRoute, private elementRef:ElementRef){}

  ngOnInit(){
    const list = document.getElementById("list");
    const wrapper= document.createElement("div");

    this.r.queryParams.subscribe((data:any)=>{
      this.dato = data.data
    });

    if(this.dato == 'Normale'){
      wrapper.innerHTML = '<h4>Lista pizze con impasto normale:</h4><ul>';

      this.pizza.forEach((e)=>{
        if(e.Impasto == this.dato)
        wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
      });

      this.impSelect = this.dato.toLowerCase()
      this.latSelect = 'Mostra tutto';
    }else if(this.dato == 'kamuth'){
      wrapper.innerHTML = '<h4>Lista pizze con impasto kamuth:</h4><ul>';

      this.pizza.forEach((e)=>{
        if(e.Impasto == 'Kamuth')
        wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
      });

      this.impSelect = this.dato.toLowerCase()
      this.latSelect = 'Mostra tutto';
    }else if(this.dato == 'integrale'){
      wrapper.innerHTML = '<h4>Lista pizze con impasto integrale:</h4><ul>';

      this.pizza.forEach((e)=>{
        if(e.Impasto == 'Integrale')
        wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
      });

      this.impSelect = this.dato.toLowerCase()
      this.latSelect = 'Mostra tutto';
    }else if(this.dato == 'false'){
      wrapper.innerHTML = '<h4>Lista pizze senza lattosio:</h4><ul>';

      this.pizza.forEach((e)=>{
        if(e.Lattosio == false)
        wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
      });

      this.impSelect = 'Mostra tutto';
      this.latSelect = 'no';
    }else{
        wrapper.innerHTML = '<h4>Lista pizze complete:</h4><ul>';
  
        this.pizza.forEach((e)=>{
          wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
        });

        this.impSelect = 'Mostra tutto';
        this.latSelect = 'Mostra tutto';
    }

    wrapper.innerHTML += '</ul>';

    list?.append(wrapper);
  }

  filtro(){
    const list = document.getElementById("list");
    const wrapper= document.createElement("div");
    list!.innerHTML = '';
    
    if(this.latSelect == 'Mostra tutto'){

      if(this.impSelect == 'Mostra tutto'){
        wrapper.innerHTML = '<h4>Lista pizze completa:</h4><ul>';

        this.pizza.forEach((e)=>{
          wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
        });
      }else if(this.impSelect == 'normale'){
        wrapper.innerHTML = '<h4>Lista pizze con impasto normale:</h4><ul>';

        this.pizza.forEach((e)=>{
          if(e.Impasto == 'Normale')
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
        });
      }else if(this.impSelect == 'kamuth'){
        wrapper.innerHTML = '<h4>Lista pizze con impasto al kamuth:</h4><ul>';

        this.pizza.forEach((e)=>{
          if(e.Impasto == 'Kamuth')
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
        });
      }else if(this.impSelect == 'integrale'){
        wrapper.innerHTML = '<h4>Lista pizze con impasto integrale:</h4><ul>';

        this.pizza.forEach((e)=>{
          if(e.Impasto == 'Integrale')
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
        });
      }

    }else if(this.latSelect == 'si'){

      if(this.impSelect == 'Mostra tutto'){
        wrapper.innerHTML = '<h4>Lista pizze con lattosio:</h4><ul>';

        this.pizza.forEach((e)=>{
          if(e.Lattosio == true){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }else if(this.impSelect == 'normale'){
        wrapper.innerHTML = '<h4>Lista pizze con lattosio e con impasto normale:</h4><ul>';

        this.pizza.forEach((e)=>{
          if(e.Lattosio == true && e.Impasto == 'Normale'){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }else if(this.impSelect == 'kamuth'){
        wrapper.innerHTML = '<h4>Lista pizze con lattosio e con impasto kamuth:</h4><ul>';

        this.pizza.forEach((e)=>{
          if(e.Lattosio == true && e.Impasto == 'Kamuth'){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }else if(this.impSelect == 'integrale'){
        wrapper.innerHTML = '<h4>Lista pizze con lattosio e con impasto integrale:</h4><ul>';

        this.pizza.forEach((e)=>{
          if(e.Lattosio == true && e.Impasto == 'Integrale'){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }
      
    }else if(this.latSelect == 'no'){

      if(this.impSelect == 'Mostra tutto'){
        wrapper.innerHTML = '<h4>Lista pizze senza lattosio:</h4><ul>'

        this.pizza.forEach((e)=>{
          if(e.Lattosio == false){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }else if(this.impSelect == 'normale'){
        wrapper.innerHTML = '<h4>Lista pizze senza lattosio e con impasto normale:</h4><ul>'

        this.pizza.forEach((e)=>{
          if(e.Lattosio == false && e.Impasto == 'Normale'){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }else if(this.impSelect == 'kamuth'){
        wrapper.innerHTML = '<h4>Lista pizze senza lattosio e con impasto kamuth:</h4><ul>'

        this.pizza.forEach((e)=>{
          if(e.Lattosio == false && e.Impasto == 'Kamuth'){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }else if(this.impSelect == 'integrale'){
        wrapper.innerHTML = '<h4>Lista pizze senza lattosio e con impasto integrale:</h4><ul>'

        this.pizza.forEach((e)=>{
          if(e.Lattosio == false && e.Impasto == 'Integrale'){
            wrapper.innerHTML += [`<li>${e.Nome} con impasto ${e.Impasto}</li>`].join('');
          }
        });
      }

    }
    wrapper.innerHTML += '</ul>';

    list?.append(wrapper);
  }
}
