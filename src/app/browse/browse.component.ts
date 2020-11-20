import { Component, OnInit,  ElementRef, ViewChild  } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {registerElement} from "nativescript-angular/element-registry"

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
var gmaps = require("nativescript-google-maps-sdk");

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    @ViewChild("MapView", null) mapView: ElementRef;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onMapReady(args) {
        console.log("Map Ready!!");
        var mapView= args.object;
        var marker = new gmaps.Marker();
        marker.position = gmaps.Position.positionFromLatLng(10.598081,-71.633228);
        marker.title= "Colombia";
        marker.snippet = "Bogota";
        marker.userData = { index:1};
        mapView.addMarker(marker);
    }
}
