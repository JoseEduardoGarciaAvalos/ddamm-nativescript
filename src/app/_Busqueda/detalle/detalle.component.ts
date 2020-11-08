import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { DetalleService } from '../detalle.service';

@Component({
    selector: 'ns-detalle',
    templateUrl: './detalle.component.html',
    providers: [DetalleService] 
})
export class DetalleComponent implements OnInit {
    public cuerpo:string = "Titulo del detalle";

    constructor(public detalleS : DetalleService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe( params =>{
            this.cuerpo = params["valor"]
        })
        let can = this.detalleS.buscar().length + 1;
        const LIM = can + 10;
        for(let i=can; i<LIM; i++){
            this.detalleS.agregar("detalle "+i);
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}