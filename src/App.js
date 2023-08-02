import logo from './logo.svg';
import './App.css';
import ChessBoard from './ChessBoard';
import { useEffect, useRef, useState } from 'react';
import { count } from 'd3';

function App() {

  const [n,setN] = useState(9)
  const [safeBoard, setSafeBoard] = useState(true)
  const [queenRows, setQueenRows]=useState([])
  let tempQueenRows=[...queenRows]
  const ref = useRef(0)

  useEffect(()=>{
    // for(let i = 0; i < n; i++){
    //   tempQueenRows[i] = 1
    // }
    // setQueenRows(Array.from({ length: n }, () => 1))
    // setQueenRows([])

  }, [n])

  useEffect(()=>{

    console.log("queenRows changed to ", queenRows)

    if(ref.current === 0 || !isSafe(queenRows)){
      let lastIndex = queenRows.length - 1 > 0 ? queenRows.length - 1 : 0
      tempQueenRows = [...queenRows]
        while(lastIndex < n ){
          ref.current++
          console.log(ref.current, queenRows, lastIndex)
          tempQueenRows[lastIndex] = 1
          setQueenRows(tempQueenRows)
          console.log(tempQueenRows)
          while(!isSafe(tempQueenRows)){
            if(tempQueenRows[lastIndex] < n)
            {              
              tempQueenRows[lastIndex] = tempQueenRows[lastIndex] + 1
            }
            else{
              tempQueenRows.pop()
            setQueenRows(tempQueenRows)

              lastIndex--
              if(tempQueenRows[lastIndex] === n){
              tempQueenRows.pop()
            setQueenRows(tempQueenRows)

                lastIndex--
              }
              tempQueenRows[lastIndex]++
            }
            setQueenRows(tempQueenRows)
            // setTimeout(()=>{
            // },1000*count.current)

          }
          lastIndex++
        }


      // lastIndex = n
      // tempQueenRows=[...queenRows]
      // console.log("tqr",tempQueenRows[lastIndex-1])
      // if(tempQueenRows[lastIndex-1] === n){           /// if the very last col is at the end row
      //   while(lastIndex === n || tempQueenRows[lastIndex-1] === n+1){      /// while the last col we are manipulating is at the end row
      //     tempQueenRows[lastIndex-1] = 1
      //     lastIndex--
      //     tempQueenRows[lastIndex-1] = tempQueenRows[lastIndex - 1 ] + 1
      //   }
      // }
      // else{
      //   tempQueenRows[lastIndex - 1 ] = tempQueenRows[lastIndex - 1 ] + 1
      // }
    }
  

  }, [queenRows])

  

    
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

  console.log(queenRows)
  
  return (
    <>
      <input onChange={e=>setN(e.target.value)}></input>
      <ChessBoard n={n}
        safeBoard = {safeBoard}
        setSafeBoard = {setSafeBoard}
        queenRows={queenRows}
      />
    </>
  );
}

export default App;
