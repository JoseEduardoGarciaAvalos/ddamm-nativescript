import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'busqueda-form',
  templateUrl: './busqueda-form.component.html'
})
export class BusquedaFormComponent implements OnInit{
  @Output() onBuscar: EventEmitter<string> = new EventEmitter();
  @Input() criterio : string = "";

  constructor() { }

  ngOnInit() {
  }


  onBotonTap(): void{
    console.dir(this.criterio);
    //if(this.textFliedValue.length>2){
      this.onBuscar.emit(this.criterio);
    //}
  }


}
