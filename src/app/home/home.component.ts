import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AppState } from "../app.module";
import { Noticia } from "../_Mi_Modulo/noticias-state.models";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public favoritos: Array<Noticia> = [];

    constructor(private store: Store<AppState>) {
        // Use the component constructor to inject providers. 
    }

    ngOnInit(): void {
        this.store.select((state) => state.noticias.favoritos).subscribe((data) => {
            this.favoritos = data
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
