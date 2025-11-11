import Copyright from '../Copyright/copyright.jsx'
import './Header.css'
function Header({ setx1 }) {
    return (
        <>
            <header className="header">
                <h1>Titulo Header</h1>
                <button onClick={() => {
                    setx1("Otro nuevo valor")
                }}>Click del header</button>
                <Copyright companyName={"Derechos Reservados"}></Copyright>
            </header>
        </>
    )
}

export default Header