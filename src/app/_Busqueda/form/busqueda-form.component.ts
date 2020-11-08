import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'busqueda-form',
  templateUrl: './busqueda-form.component.html'
})
export class BusquedaFormComponent implements OnInit{
  textFliedValue: string ="";
  @Output() busqueda: EventEmitter<string> = new EventEmitter();
  @Input() inicial : string;
  onButtonTap(): void{
    console.dir(this.textFliedValue);
    //if(this.textFliedValue.length>2){
      this.busqueda.emit(this.textFliedValue);
    //}
  }

  constructor() { }

  ngOnInit() {
    //this.textFliedValue = this.inicial;
  }

}
