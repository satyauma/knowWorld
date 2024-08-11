
import { useState } from "react"
import Navbar from "./components/NavBar.jsx"
import NewsBoard from "./components/newsBoard.jsx"




const App =()=>{
  const [category,setCategory]=useState("general")
  return(
    <div>
      <div  style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/world-infographic_23-2147511176.jpg?ga=GA1.1.2108744846.1706758441&semt=ais_hybrid')",
        backgroundSize: 'cover',
        
      }}
       >
      <Navbar setCategory={setCategory}/>
      
      <NewsBoard category={category}/>
      </div>

    </div>
  )
}

export default App