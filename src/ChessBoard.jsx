import React, { useEffect } from 'react'
import './ChessBoard.scss'

export default function ChessBoard({n, queenRows, safeBoard, setSafeBoard}) {
    
    useEffect(()=>{

        console.log("rerender")

        let flag = false
        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                if(queenRows[i] === queenRows[j]){
                        flag = true
                }
                else if(j - i === queenRows[j] - queenRows[i] ){
                    flag = true
                }
                else if(i - j === queenRows[j] - queenRows[i]){
                    flag = true
                }
            }
        }
                setSafeBoard(!flag)
    },[queenRows])
    

    let arr = []
    for(let i = 0; i < n ; i++){
        let arr2 = []
        for(let j = 0 ; j < n ; j++){
            arr2.push((i + j) % 2 === 0 ? "w" : "b")
        }
        arr.push(arr2)
    }
  return (
    <div className='chessboard-holder'>
        {arr.map(subArr=><div className='row'>
            {
                subArr.map(
                    ele => 
                    (<div className={
                        ele === 'w' ? 'white-sq' : 'black-sq'
                    }/>)
                )
            }
            </div>
        )}
        {queenRows.map((queen,index)=><img src={
            "https://p7.hiclipart.com/preview/532/888/1/battle-chess-queen-chess-piece-king-chess-game.jpg"
        }
            className='queen'
            style={{
                bottom:30*queen
            }}
        />)}

    </div>
  )
}
