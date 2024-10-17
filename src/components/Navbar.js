import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(prop) {
    return (
        <>
            <div className={`navbar bg-${prop.mode} text-white`}>
                <div className="log">
                    <h1>{prop.title}</h1>
                </div>
                <div className={`menu text-${prop.mode === "light" ? "dark" : "light"}`}>
                    <ul>
                        <li><Link to="/" className={`text-${prop.mode === "light" ? "dark" : "light"}`}>{prop.home}</Link></li>
                        <li><Link to="/about" className={`text-${prop.mode === "light" ? "dark" : "light"}`}>{prop.about}</Link></li>
                        <li><Link to="/counter" className={`text-${prop.mode === "light" ? "dark" : "light"}`}>Counter</Link></li>
                        <li><Link to="/contact" className={`text-${prop.mode === "light" ? "dark" : "light"}`}>Contact</Link></li>
                        <div className="form-check form-switch pt-3">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title: "shivam"
    ,about: "ABOUT"
}
export default Navbar;