import Navigation from "./components/Navigation"
import Home from "./components/Home"
import { useState } from "react"

function App() {
  const [query,setQuery] = useState('')
  const handleSearch = (e)=>{
    e.preventDefault();
    setQuery(e.target.value)
  }
  return (
    <div className="bg-slate-50">
    <Navigation handleSearch={handleSearch}/>
    <Home query={query}/>
    </div>
  )
}

export default App
