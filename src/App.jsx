import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './json/color.json'

function App() {
     const randomElementFromArray=arr=> {
      const indexRandom = Math.floor(Math.random()*arr.length)
      return arr [indexRandom]
     }
const [quoteRandom, setQuoteRandom]= useState (randomElementFromArray(quotes) )  
console. log(color)  

const [colorRandom, setColorRandom]= useState (randomElementFromArray(color))


const handleClick =() => {
  setQuoteRandom (randomElementFromArray (quotes))
  setColorRandom(randomElementFromArray(color))

}
   
  return (
    <div style={{backgroundColor: colorRandom } } className="App">

      <QuoteBox quoteRandom = {quoteRandom} 
      handleClick = {handleClick}
      colorRandom={colorRandom}
       />

    </div>
  )
}

export default App
