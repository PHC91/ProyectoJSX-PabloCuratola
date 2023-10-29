import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Proximamente..."}/>   
      </div>
  )
}

export default App