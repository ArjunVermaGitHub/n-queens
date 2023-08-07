import logo from './logo.svg';
import './App.css';
import ChessBoard from './ChessBoard';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [n,setN] = useState(25)
  const rate = useRef(450)

  const [safeBoard, setSafeBoard] = useState(true)
  const [queenRows, setQueenRows]=useState([1,1])
  let tempQueenRows=[...queenRows]
  const ref = useRef(0)
  const lastIndex = useRef(1)

  
  useEffect(()=>{
    // for(let i = 0; i < n; i++){
    //   tempQueenRows[i] = 1
    // }
    ref.current > 1 && setTimeout(()=>{setQueenRows([1,1])},1001)
    ref.current = 0
    lastIndex.current = 1

  }, [n])

  useEffect(()=>{

      console.log({queenRows})

        if(!isSafe(queenRows) || lastIndex.current < n ){
          ref.current++
          // console.log(ref.current, queenRows, lastIndex.current)
          tempQueenRows[lastIndex.current] = 1
          if(isSafe(tempQueenRows)){
            lastIndex.current++
          tempQueenRows[lastIndex.current] = 1

          }
          while(!isSafe(tempQueenRows)){
            if(tempQueenRows[lastIndex.current] < n)
            {              
              tempQueenRows[lastIndex.current] = tempQueenRows[lastIndex.current] + 1
            }
            else{
              tempQueenRows.pop()

              lastIndex.current--
              if(tempQueenRows[lastIndex.current] === n){
              tempQueenRows.pop()
                lastIndex.current--
              }
              tempQueenRows[lastIndex.current]++
            }
            console.log(tempQueenRows)
            if(!isSafe(tempQueenRows) || lastIndex.current < n){
              setTimeout(()=>{
              setQueenRows(tempQueenRows)
            },1000/rate.current)
            }
            // setTimeout(()=>{
            // },1000*count.current)

          }
          lastIndex.current++
        }


      // lastIndex.current = n
      // tempQueenRows=[...queenRows]
      // console.log("tqr",tempQueenRows[lastIndex.current-1])
      // if(tempQueenRows[lastIndex.current-1] === n){           /// if the very last col is at the end row
      //   while(lastIndex.current === n || tempQueenRows[lastIndex.current-1] === n+1){      /// while the last col we are manipulating is at the end row
      //     tempQueenRows[lastIndex.current-1] = 1
      //     lastIndex.current--
      //     tempQueenRows[lastIndex.current-1] = tempQueenRows[lastIndex.current - 1 ] + 1
      //   }
      // }
      // else{
      //   tempQueenRows[lastIndex.current - 1 ] = tempQueenRows[lastIndex.current - 1 ] + 1
      // }
  

  }, [queenRows, n])

  

    
  function isSafe(rows){
    let flag = false
        for(let i = 0; i < rows.length; i++){
          for(let j = i + 1; j < rows.length; j++){
              if(rows[i] === rows[j]){
                      flag = true
              }
              else if(j - i === rows[j] - rows[i] ){
                  flag = true
              }
              else if(i - j === rows[j] - rows[i]){
                  flag = true
              }
          }
      }
      return !flag
  }
  
  return (
    <>
      Number of pieces: <input onChange={e=>setN(e.target.value)}/>
      Rate of placing piece: <input type="range" value={rate.current} min={1} max={1000} onChange={e=>{rate.current = e.target.value}}/>

      <ChessBoard n={n}
        safeBoard = {safeBoard}
        setSafeBoard = {setSafeBoard}
        queenRows={queenRows}
      />
    </>
  );
}

export default App;
