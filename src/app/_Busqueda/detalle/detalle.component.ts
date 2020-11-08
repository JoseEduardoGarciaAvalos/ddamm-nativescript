import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";

@Component({
    selector: 'ns-detalle',
    templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {
    public cuerpo:string = "Titulo del detalle";

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe( params =>{
            this.cuerpo = params["valor"]
        })
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}