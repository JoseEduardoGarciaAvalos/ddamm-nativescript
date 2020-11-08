import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


import { NewsRoutingModule } from './miModulo-routing.module';
import { MusicaComponent } from './Musica/musica.component';

import { NoticiasComponent } from "./Noticias/noticias.component";


@NgModule({
  declarations: [
    NoticiasComponent,
    MusicaComponent
  ],
  imports: [
    NewsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NuevoModule { }





