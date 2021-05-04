import React from "react";
import { connect } from "react-redux";

const Titulares = ({ titulares, quitarTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map((jugador) => (
          <article className="titular" key={jugador.id}>
            <div>
              <img src={jugador.avatar} alt={jugador.first_name} />
              <button onClick={()=> quitarTitular(jugador)}>X</button>
            </div>
            <p>{jugador.first_name} {jugador.last_name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispachToProps = (dispatch) => ({
  quitarTitular(jugador){
    dispatch({
      type: "QUITAR_TITULAR",
      jugador
    })
  }
});

export default connect(mapStateToProps, mapDispachToProps)(Titulares);
