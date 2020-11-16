import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoticiasService } from "./_Mi_Modulo/noticias.service";

import { ActionReducerMap, StoreModule as NgRxStoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { initializeNoticiasState, NoticiasEffects, NoticiasState, reducersNoticias } from "./_Mi_Modulo/noticias-state.models";

export interface AppState {
    noticias: NoticiasState;
}

const reducers: ActionReducerMap<AppState> = {
    noticias: reducersNoticias
};

const reducersInitialState = {
    noticias: initializeNoticiasState()
};

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
        EffectsModule.forRoot([NoticiasEffects])
    ],
    declarations: [
        AppComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [NoticiasService],
})
export class AppModule { }
