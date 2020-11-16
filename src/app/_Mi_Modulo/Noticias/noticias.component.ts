import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from '../noticias.service';
import * as platform from "tns-core-modules/platform";
import { Store } from '@ngrx/store';
import { AppState } from '~/app/app.module';
import * as Toast from 'nativescript-toasts';
import { Noticia, NuevaNoticiaAction, FavoritoAction } from '../noticias-state.models';
@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {
  public resultados: Array<string> = [];

  constructor(public noticiasS: NoticiasService, private store: Store<AppState>,) {
    this.resultados.push("Noticia 1")
    this.resultados.push("Noticia 2")
    this.resultados.push("Noticia 3")
    this.resultados.push("Noticia 4")
    this.resultados.push("Noticia 5")
  }

  ngOnInit() {
    this.store.select((state) => state.noticias.sugerida)
      .subscribe((data) => {
        const f = data;
        if (f != null) {
          Toast.show({ text: "Sugerimos leer: " + f.titulo, duration: Toast.DURATION.SHORT });
        }
      });
    if (platform.isIOS) {
      this.resultados.push("Noticia exclusiva para IOS");
    }
    if (platform.isAndroid) {
      this.resultados.push("Noticia exclusiva para Android");
    }
  }

  onItemTap(x): void {
    console.log("EVENTO onItemTap: ", x.view.bindingContext)
  }

  onTap(x): void {
    console.log("EVENTO onTap: ", x.object.get("aux"))
    this.store.dispatch(new FavoritoAction(new Noticia(x.view.bindingContext)));
    Toast.show({ text: "Se ha agregado un nuevo favorito", duration: Toast.DURATION.SHORT });
  }

  onLongPress(x): void {
    console.log("EVENTO onLongPress: ", x.object.get("aux"))
    this.store.dispatch(new NuevaNoticiaAction(new Noticia(x.view.bindingContext)));
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

}
