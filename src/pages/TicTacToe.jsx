import React from 'react'
import './Tictactoe.css'

function TicTacToe() {
  return (
    <>
    <div className='board-row'>
          <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
    </div>
    <div className='board-row'>
          <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
    </div>
    <div className='board-row'>
          <button className='square'>X</button>
        <button className='square'>X</button>
        <button className='square'>X</button>
    </div>
    </>
  )
}

export default TicTacToe;