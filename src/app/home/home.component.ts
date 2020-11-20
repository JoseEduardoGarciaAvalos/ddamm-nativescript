import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AppState } from "../app.module";
import { Noticia } from "../_Mi_Modulo/noticias-state.models";
import * as camera from "nativescript-camera";
import * as SocialShare from "nativescript-social-share";
import { ImageSource } from "tns-core-modules/image-source/image-source";

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

    onButtonTap() {
        camera.requestCameraPermissions().then(
            function success() {
                const options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
                camera.takePicture(options)
                    .then((imageAsset) => {
                        console.log("Tamaño: " + imageAsset.options.width + "x" + imageAsset.options.height);
                        console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
                        console.log("Foto guardada");
                        ImageSource.fromAsset(imageAsset).then( (imageSource) =>{
                            SocialShare.shareImage(imageSource, "Asunto: Compartido desde el curso!");
                        }).catch((err) => {
                            console.log("Error al compartir la imagen-> " + err.message);
                        });
                    }).catch((err) => {
                        console.log("Error -> " + err.message);
                    });
            },
            function failure() {
                console.log("Permiso de camara no aceptado por el usuario");
            }
        );
    }
}
