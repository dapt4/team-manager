import React from 'react'
import {connect} from 'react-redux'

const Suplentes = ({suplentes, quitarSuplente}) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="suplentes">
        {suplentes.map((jugador) => (
          <article className="suplentes" key={jugador.id}>
            <div>
              <img src={jugador.avatar} alt={jugador.first_name} />
              <button onClick={()=>quitarSuplente(jugador)}>X</button>
            </div>
            <p>{jugador.first_name} {jugador.last_name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  suplentes: state.suplentes
})
const mapDispachToProps = (dispatch) => ({
  quitarSuplente(jugador){
    dispatch({
      type: "QUITAR_SUPLENTE",
      jugador
    })
  }
});

export default connect(mapStateToProps, mapDispachToProps)(Suplentes);
