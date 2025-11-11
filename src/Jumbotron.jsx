import { useContext } from "react"
import { AppContext } from "./components/Context/AppContext"

function Jumbotron({ texto }) {
    const { c1, setc1, setCopyright } = useContext(AppContext)
    return (<>
        <p>JUMBOTRON</p>
        <h1>{texto}</h1>
        <h1 className="jumbotron_title jumbotron_title--purple">{c1}</h1>
        <button onClick={() => setCopyright("Nuevo Valor")}>CAMBIAR EL COPYRIGHT</button>
    </>)
}
export default Jumbotron