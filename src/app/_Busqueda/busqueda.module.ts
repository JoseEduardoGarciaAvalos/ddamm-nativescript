import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BusquedaRoutingModule } from "./busqueda-routing.module";
import { BusquedaListComponent } from "./busqueda-list.component";
import { DetalleComponent } from "./detalle/detalle.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { BusquedaFormComponent } from "./form/busqueda-form.component";
import { MinLenDirective } from "./minLen.directive";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        BusquedaRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        BusquedaListComponent,
        DetalleComponent,
        BusquedaFormComponent,
        MinLenDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BusquedaModule { }
