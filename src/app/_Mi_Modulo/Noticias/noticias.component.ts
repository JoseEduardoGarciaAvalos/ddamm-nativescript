import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {

  constructor(public noticiasS: NoticiasService) { 
    this.noticiasS.agregar("Noticia 1")
    this.noticiasS.agregar("Noticia 2")
    this.noticiasS.agregar("Noticia 3")
    this.noticiasS.agregar("Noticia 4")
    this.noticiasS.agregar("Noticia 5")
  }

  ngOnInit() {
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

}
