import {Injectable} from "@angular/core";
import {getJSON,request} from "tns-core-modules/http";
const sqlite = require("nativescript-sqlite");

Injectable({
    providedIn: "root"
})
export class NoticiasService{
    //private noticias: Array<string> = [];
    api: string = "https://3e721fc19f13.ngrok.io";

    constructor() {
        this.getDb((db) => {
            console.dir(db);
            db.each("select * from logs",
                (err, fila) => console.log("fila", fila),
                (err, totales) => console.log("filas totales: ", totales));
        }, () => console.log("error on getDB"));
    }

    getDb(fnOk, fnError) {
        return new sqlite("mi_db_logs", (err, db) => {
            if (err) {
                console.log("error al abrir db!", err);
            } else {
                console.log("esta la db abierta:", db.isOpen() ? "Si" : "No");
                db.execSQL("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT,texto TEXT)")
                    .then((id) => {
                        console.log("CREATE TABLE OK");
                        fnOk(db);
                    }, (error) => {
                        console.log("CREATE TABLE ERROR", error);
                        fnError(error);
                    });
            }
        });
    }
    
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
       if(s)
            this.getDb((db) => {
                db.execSQL("insert into logs (texto) values (?)", [s],
                    (err, id) => console.log("nuevo id", id));
            }, () => console.log("error on getDB"));
        
        return getJSON(this.api + "/get?q="+s);
    }
}