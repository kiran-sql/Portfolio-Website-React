import React from 'react'


const Footer = (props) => {
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-lg-3 item social mx-auto">
                    <a href="mailto:chhablanikiran@gmail.com">
                        <i className="icon ion-ios-email ion-email icon-links fs-2 mx-3" style={{color:props.mode === 'light' ? '#000':'#fff'}}></i>
                    </a>
                    <a href="https://github.com/kiranchhablani">
                        <i className="icon ion-social-github icon-links fs-2 mx-3" style={{color:props.mode === 'light' ? '#000':'#fff'}}></i>
                    </a>
                    <a href="https://twitter.com/kiran_chhablani">
                        <i className="icon ion-social-twitter icon-links fs-2 mx-3" style={{color:props.mode === 'light' ? '#000':'#fff'}}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kiran-chhablani-3322a221b" style={{color:props.mode === 'light' ? '#000':'#fff'}}>
                        <i className="icon ion-social-linkedin icon-links fs-2 mx-3"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer