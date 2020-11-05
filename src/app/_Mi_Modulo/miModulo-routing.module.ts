import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { MusicaComponent } from './Musica/musica.component';

import { NoticiasComponent } from "./Noticias/noticias.component";

const routes: Routes = [
  { path: "noticias", component: NoticiasComponent },
  { path: "musica", component: MusicaComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class NewsRoutingModule { }
