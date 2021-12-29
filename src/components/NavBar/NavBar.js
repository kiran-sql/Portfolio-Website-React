import React from 'react'

const NavBar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} 
            style={{backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>
            <div className="container">
                {/* <a className="navbar-brand fw-bolder position-absolute top-1 start-0 fs-5" href="/">&lt;dev-kiran&gt;</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto mt-2 mt-lg-0 mx-auto">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">About Me</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">Skills</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">Projects</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.modeName}</label>
                </div>
            </div>
        </nav>
    )
}

export default NavBar