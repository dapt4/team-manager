import React, {useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import { fetchData } from '../store'

const Jugadores = ({ jugarores, agregarTitular, agregarSuplente }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData())
  },[])
  return (
    <section>
      <h2>Jugadores</h2>
      <div className="contenedor-jugarores">
        {jugarores.map((jugador) => (
          <article className="jugador" key={jugador.id}>
            <img src={jugador.avatar} alt={jugador.first_name} />
              <h3>{jugador.first_name} {jugador.last_name}</h3>
            <div>
              <button onClick={() => agregarTitular(jugador)}>Titulares</button>
              <button onClick={()=> agregarSuplente(jugador)}>Suplentes</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  jugarores: state.jugadores,
});

const mapDispachToProps = (dispatch) => ({
  agregarTitular(jugador){
    dispatch({
      type: "AGREGAR_TITULAR",
      jugador
    })
  },
  agregarSuplente(jugador){
    dispatch({
      type: "AGREGAR_SUPLENTE",
      jugador
    })
  }
});

export default connect(mapStateToProps, mapDispachToProps)(Jugadores);
