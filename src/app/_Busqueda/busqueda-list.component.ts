import { Component, OnInit, ViewChild, ElementRef  } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../_Mi_Modulo/noticias.service";
import * as platform from "tns-core-modules/platform";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogo from "tns-core-modules/ui/dialogs";
import { View, Color } from "tns-core-modules/ui/page/page";

@Component({
    selector: "busqueda-lista",
    moduleId: module.id,
    templateUrl: "./busqueda-list.component.html"
})
export class BusquedaListComponent implements OnInit {
    public resultados : Array<string>;
    @ViewChild("labelHTML",null) layout_typescript:ElementRef; 

    constructor(public noticiasS: NoticiasService, private routerExt: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.noticiasS.buscar().splice(0, this.noticiasS.buscar().length)
        this.noticiasS.agregar("Noticia 1")
        this.noticiasS.agregar("Noticia 2")
        this.noticiasS.agregar("Noticia 3")
        this.noticiasS.agregar("Articulo 1")
        if (platform.isIOS) {
            this.noticiasS.agregar("Noticia exclusiva para IOS");
        }
        if (platform.isAndroid) {
            this.noticiasS.agregar("Noticia exclusiva para Android");
        }
        this.buscar("Noticia")
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onItemTap(x): void {
        console.dir(x);
        console.log("TEXTO ", this.resultados[x.index])
    }

    navegarDetalleTap(ruta: string, evento): void {
        this.onItemTap(evento)
        this.routerExt.navigate([ruta], {
            transition: {
                name: "fade"
            },
            queryParams: { 'valor': this.resultados[evento.index], }
        });

        (<RadSideDrawer>app.getRootView()).closeDrawer();
    }

    temporizador(fn) { setTimeout(fn, 800); }

    agregarMasNoticia() {
        dialogo.action("Agregar noticias", "Cancelar", ["Nuevos", "Populares"]).then((result) => {
            console.log("resultado: " + result);
            if (result === "Nuevos") {
                this.temporizador(() =>
                    dialogo.alert({ title: "Información", message: "Se encontro 1 noticia nueva", okButtonText: "OK" }).then(() => {
                        console.log("Cerrado 1");
                        this.noticiasS.agregar("Noticia NUEVA")
                        this.resultados.push("Noticia NUEVA")
                    }));
            } else if (result === "Populares") {
                this.noticiasS.agregar("Noticia POPULAR")
                this.resultados.push("Noticia POPULAR")
            }
        });
    }

    buscar(valorFiltro:string){
        this.resultados = this.noticiasS.buscar().filter((x)=> x.indexOf(valorFiltro)>= 0);

        //ejecutar animacion luego del buscar
        const vista = <View>this.layout_typescript.nativeElement;
        vista.backgroundColor = new Color("White");
        vista.animate({
            backgroundColor: new Color("Green"),
            duration: 3000,
            delay: 150,
        });
    }

    onReset(evento){
        const vista = <View>this.layout_typescript.nativeElement;
        vista.backgroundColor = new Color("White");
        console.log("Se ha realizado un Gesto: longPress")
    }
}
