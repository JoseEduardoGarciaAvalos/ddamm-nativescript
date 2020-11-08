import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then(m => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then(m => m.BrowseModule) },
    { path: "busqueda", loadChildren: () => import("~/app/_Busqueda/busqueda.module").then(m => m.BusquedaModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then(m => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then(m => m.SettingsModule) },
    { path: "nuevo", loadChildren: () => import("~/app/_Mi_Modulo/miModulo.module").then(m => m.NuevoModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
