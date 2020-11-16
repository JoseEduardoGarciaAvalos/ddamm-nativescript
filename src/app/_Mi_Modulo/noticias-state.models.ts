import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Observable} from "rxjs";
import { map } from "rxjs/operators";
import { Actions, Effect, ofType  } from "@ngrx/effects";


// ESTADO
export class Noticia {
  constructor(public titulo: string) { }
}

// tslint:disable-next-line:interface-name
export interface NoticiasState {
    // tslint:disable-next-line:array-type
    items: Noticia[];
    favoritos: Noticia[];
    sugerida: Noticia;
}

export function initializeNoticiasState() {
  return {
    items: [],
    favoritos: [],
    sugerida: null
  };
}

// ACCIONES
export enum NoticiasActionTypes {
  INIT_MY_DATA = "[Noticias] Init My Data",
  NUEVA_NOTICIA = "[Noticias] Nueva",
  SUGERIR_NOTICIA = "[Noticias] Sugerir",
  FAVORITA_NOTICIA = "[Noticias] Favorito"
}

// tslint:disable-next-line:max-classes-per-file
export class InitMyDataAction implements Action {
  type = NoticiasActionTypes.INIT_MY_DATA;
  constructor(public titulares: Array<string>) {}
}

// tslint:disable-next-line:max-classes-per-file
export class NuevaNoticiaAction implements Action {
  type = NoticiasActionTypes.NUEVA_NOTICIA;
  constructor(public noticia: Noticia) {}
}

// tslint:disable-next-line:max-classes-per-file
export class SugerirAction implements Action {
  type = NoticiasActionTypes.SUGERIR_NOTICIA;
  constructor(public noticia: Noticia) {}
}

export class FavoritoAction implements Action {
  type = NoticiasActionTypes.FAVORITA_NOTICIA;
  constructor(public noticia: Noticia) {}
}

export type NoticiasViajesActions = FavoritoAction | SugerirAction | NuevaNoticiaAction | InitMyDataAction;

// REDUCERS
export function reducersNoticias(
  state: NoticiasState,
  action: NoticiasViajesActions
): NoticiasState {
  switch (action.type) {
    case NoticiasActionTypes.INIT_MY_DATA: {
      const titulares: Array<string> = (action as InitMyDataAction).titulares;

      return {
          ...state,
          items: titulares.map((t) => new Noticia(t))
        };
    }
    case NoticiasActionTypes.NUEVA_NOTICIA: {
      return {
          ...state,
          items: [...state.items, (action as NuevaNoticiaAction).noticia ]
        };
    }
    case NoticiasActionTypes.SUGERIR_NOTICIA: {
      return {
          ...state,
          sugerida: (action as SugerirAction).noticia
        };
    }
    case NoticiasActionTypes.FAVORITA_NOTICIA: {
      return {
          ...state,
          favoritos: [...state.favoritos, (action as FavoritoAction).noticia ]
        };
    }
  }

  return state;
}

// EFFECTS
// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class NoticiasEffects {
    @Effect()
    NuevoAgregado$: Observable<Action> = this.actions$.pipe(
        ofType(NoticiasActionTypes.NUEVA_NOTICIA),
        map((action: NuevaNoticiaAction) => new SugerirAction(action.noticia))
    );

    constructor(private actions$: Actions) {}
}