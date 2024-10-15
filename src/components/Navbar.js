import PropTypes from 'prop-types'

function Navbar(prop) {
    return (
        <>
            <div className={`navbar bg-${prop.mode} text-white`}>
                <div className="log">
                    <h1>{prop.title}</h1>
                </div>
                <div className={`menu text-${prop.mode === "light" ? "dark" : "light"}`}>
                    <ul>
                        <li>{prop.home}</li>
                        <li>{prop.about}</li>
                        <li>Blog</li>
                        <li>Contact</li>
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