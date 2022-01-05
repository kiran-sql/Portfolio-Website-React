import React from 'react'
// import './AboutMe.css' 

const AboutMe = (props) => {
    return (
        <div className="container">
            <h3 className="display-5 mx-15" style={{color:props.mode === 'light' ? '#17202A':'#fff', textAlign:'center'}}>About Me</h3>
            <div class="about-me__body">
            <p style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
                
            </p>
            <p style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
                
            </p>
        </div>
        <div className="col-3 my-3 mx-auto">
                <a href="https://github.com/kiranchhablani" className="btn" target={`_blank`}>
                    <button type="button" className={`btn btn-outline-${props.mode === 'light' ? 'dark':'light'} mx-auto`}
                        style={{color:props.mode === 'light' ? '#fff':'#17202A', 
                        backgroundColor:props.mode === 'light' ? '#17202A':'#fff'}}>
                            Resume</button>
                </a>
            </div>
    </div>
    )
}

export default AboutMe