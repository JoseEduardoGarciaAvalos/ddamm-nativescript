var noticias_state_model = require("../_Mi_Modulo/noticias-state.models");


describe("reducersNoticias", function () {
    it("should reduce init data ", function () {
        //setup
        var prevState = noticias_state_model.initializeNoticiasState();
        var action = new noticias_state_model.initMyDataAction(["noticia 1", "noticia 2"]);

        // action
        var newState = noticias_state_model.reducersNoticias(prevState, action);

        //assertions
        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].titulo).toEqual("noticia 1");
    });

    it("should reduce new item added", function () {
        var prevState = noticias_state_model.initializeNoticiasState();
        var action = new noticias_state_model.NuevaNoticiaAction(new noticias_state_model.Noticia("Noticia 3"));//agregamos la nueva noticia

        var newState = noticias_state_model.reducersNoticias(prevState, action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].titulo).toEqual("Noticia 3");
    });

    it("should reduce new item added v2", function () {
        var prevState = noticias_state_model.initializeNoticiasState();
        var action = new noticias_state_model.NuevaNoticiaAction(new noticias_state_model.Noticia("Noticia 3"));
        var newState = noticias_state_model.reducersNoticias(prevState, action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].titulo).toEqual("Noticia 3");
    });
})