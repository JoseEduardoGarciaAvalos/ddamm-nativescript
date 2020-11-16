import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
let localStorage = require("nativescript-localstorage");
@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
    public usuario: string;
    public mensaje: string;

    constructor() {
        this.usuario = localStorage.getItem("usuario");
        if (this.usuario == null) this.mensaje = "Usuario no autenticado"
        else this.mensaje = "Bienvenido " + this.usuario
        console.log(localStorage.getItem("usuario"));
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    guardar(): void {
        console.log(this.usuario);
        if (this.usuario == "" || this.usuario == null) this.mensaje = "Usuario no autenticado"
        else {
            this.mensaje = "Bienvenido " + this.usuario
            localStorage.setItem("usuario", this.usuario);
        }
    }
}
