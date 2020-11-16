import {Injectable} from "@angular/core";
import {getJSON,request} from "tns-core-modules/http";

Injectable({
    providedIn: "root"
})
export class NoticiasService{
    //private noticias: Array<string> = [];
    api: string = "https://aee75b773a19.ngrok.io";


    agregar(s: string){
        return request({
            url: this.api+"favs",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            content: JSON.stringify({
                nuevo: s
            })
        });
    }
    
    favs(){
        return getJSON(this.api + "favs");
    }
    
    buscar(s: string){
        return getJSON(this.api + "/get?q="+s);
    }
}