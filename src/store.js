import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  jugadores: [],
  titulares: [],
  suplentes: [],
};

//reducers
const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      jugadores: state.jugadores
        .filter((jugador) => jugador.id !== action.jugador.id)
        .sort((a, b) => a.id - b.id),
      titulares: state.titulares
        .concat(action.jugador)
        .sort((a, b) => a.id - b.id),
    };
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      jugadores: state.jugadores
        .filter((jugador) => jugador.id !== action.jugador.id)
        .sort((a, b) => a.id - b.id),
      suplentes: state.suplentes
        .concat(action.jugador)
        .sort((a, b) => a.id - b.id),
    };
  }
  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares
        .filter((jugador) => jugador.id !== action.jugador.id)
        .sort((a, b) => a.id - b.id),
      jugadores: state.jugadores
        .concat(action.jugador)
        .sort((a, b) => a.id - b.id),
    };
  }
  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes
        .filter((jugador) => jugador.id !== action.jugador.id)
        .sort((a, b) => a.id - b.id),
      jugadores: state.jugadores
        .concat(action.jugador)
        .sort((a, b) => a.id - b.id),
    };
  }
  if (action.type === "SUCCESS_GET_DATA") {
    return {
      ...state,
      jugadores: state.jugadores.concat(action.data).sort((a,b)=> a.id - b.id)
    }
  }
  return state;
};

//actions
const START_GET_DATA = "START_GET_DATA";
const SUCCESS_GET_DATA = "SUCCESS_GET_DATA";

const startGetData = (payload) => ({
  type: START_GET_DATA,
  ...payload,
});

const successGetData = (payload) => ({
  type: SUCCESS_GET_DATA,
  ...payload,
});

export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(startGetData());
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => dispatch(successGetData(json)));
  };
};

export default createStore(reducerEntrenador, applyMiddleware(thunk));
