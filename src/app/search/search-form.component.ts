import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ns-search-form',
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent implements OnInit{
  textFliedValue: string ="";
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() inicial : string;
  onButtonTap(): void{
    console.dir(this.textFliedValue);
    //if(this.textFliedValue.length>2){
      this.search.emit(this.textFliedValue);
    //}
  }

  constructor() { }

  ngOnInit() {
    //this.textFliedValue = this.inicial;
  }

}
