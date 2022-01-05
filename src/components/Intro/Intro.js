import React from 'react'
// import './AboutMe.css' 

const Intro = (props) => {
    return (
        <div id="home" className="intro container my-6">
        <h1>
            <strong style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
                Kiran <br/>Chhablani
            </strong>
        </h1>
        <p style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
            FullStack Developer
        </p>
        <p style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
            Junior FullStack developer with 6+ months of experience in web development. 
            Proficient with JavaScript and Python.
        </p>
        <img src="/" alt="my picture" className="figure-img img-fluid rounded" />
    </div>
    )
}

export default Intro