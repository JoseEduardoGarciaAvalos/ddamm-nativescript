import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../_Mi_Modulo/noticias.service";
import * as platform from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "busqueda-lista",
    moduleId: module.id,
    templateUrl: "./busqueda-list.component.html"
})
export class BusquedaListComponent implements OnInit {

    constructor(public noticiasS: NoticiasService, private routerExt: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.noticiasS.agregar("Noticia 10")
        this.noticiasS.agregar("Noticia 2")
        this.noticiasS.agregar("Noticia 3")
        this.noticiasS.agregar("Noticia 4")
        this.noticiasS.agregar("Noticia 5")
        if (platform.isIOS) {
            this.noticiasS.agregar("Noticia exclusiva para IOS");
          } 
          if (platform.isAndroid) {
            this.noticiasS.agregar("Noticia exclusiva para Android");
          }   
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTap(x):void{
        console.dir(x);
        console.log("TEXTO ",this.noticiasS.buscar()[x.index])
    }

    navegarDetalleTap(ruta: string, evento): void {
        this.onItemTap(evento)
        this.routerExt.navigate([ruta], {
            transition: {
                name: "fade"
            }, 
            queryParams: { 'valor': this.noticiasS.buscar()[evento.index], }
        });

        (<RadSideDrawer>app.getRootView()).closeDrawer();
    }
}
