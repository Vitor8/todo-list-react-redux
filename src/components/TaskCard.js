import React from 'react';

function TaskCard({ task }) {
  return (
    <div>
      <p>{ task }</p>
      <button type="button">Finalizar</button>
      <button type="button">Deletar</button>
      <button type="button">Atualizar</button>
    </div>
  )
}

export default TaskCard;

