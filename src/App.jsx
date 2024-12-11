import { useState } from 'react'
import './App.css'

function App(){
  const[input,setinput] = useState("")
  const[bill,setbill] = useState()
  const[consume,setconsume] = useState()
  const[visible,setvisible] = useState(false)

  const handlecheck = (e) => {
    setinput((prevalue) => prevalue + e.target.value)
    
  }
  const handleclear= () => {
    setinput("")
  }

  const handleclick = () => {

    setvisible(true)
    let total = 0
    
    const unit = (input)
    console.log(unit)
    setconsume(unit)
    
    if(unit <= 100){
      total = (unit * 0)
    }
    else if(unit <= 200){
      total = (100 * 0) + (unit - 100) * 2.35
      console.log("Your Price Is" ,total)
    }
    else if (unit <= 400){
      total = (100*2.35) + (unit - 200) * 4.7
      console.log("Tour Price is ", total)
    }
    else if(unit <= 500){
      total = (100*2.35) + (200*4.7) + (unit - 400) * 6.3
      console.log("Your Price is",total)
    }
    else if(unit<=600){
      total = (300*4.7) + (100 * 6.3) + (unit - 500) * 8.4
      console.log(total)
    }
    else if(unit <= 800){
      total = (300*4.7) + (100 * 6.3) + (100*8.4) + (unit - 600) * 9.45
      console.log(total)
    }
    else if(unit <= 1000){
      total = (300 * 4.7) + (100  * 6.3) + (100 * 8.4) + (200 * 9.45) + (unit - 800) * 10.5
      console.log(total)
    }
    else if(unit >= 1001){
      total = (300 * 4.7) + (100  * 6.3) + (100 * 8.4) + (200 * 9.45) + (200 * 10.5) + (unit - 1000) * 11.55
      
    }
    setbill(total.toFixed(2))
    }
  

  return (
    <>
    <div className = "heading">TNEB Calculator</div>
        <div className="calculator">
        
          <input type='number' value={input}/>
          <div className="buttons">
            <button onClick={handlecheck} value={"1"}>1</button>
            <button onClick={handlecheck} value={"2"}>2</button>
            <button onClick={handlecheck} value={"3"}>3</button>

            <button onClick={handlecheck} value={"4"}>4</button>
            <button onClick={handlecheck} value={"5"}>5</button>
            <button onClick={handlecheck} value={"6"}>6</button>

            <button onClick={handlecheck} value={"7"}>7</button>
            <button onClick={handlecheck} value={"8"}>8</button>
            <button onClick={handlecheck} value={"9"}>9</button>

            <button onClick={handlecheck} value={"."}>.</button>
            <button onClick={handlecheck} value={"0"}>0</button>
            <button onClick={handleclear}>C</button>
          </div>
          <div className="calculation">
            <button onClick={handleclick}>Calculate</button>
          </div>
        </div>
        {visible ? <div className="result">
          <div>
            <p>Unit Consumed</p>
            <p>{consume}</p>
          </div>
          <div>
            <p>Total</p>
            <p>{bill}</p>
          </div>
        </div> : null}

    </>
  )
}

export default App
