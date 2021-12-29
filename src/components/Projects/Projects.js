import React from 'react'

const Projects = (props) => {
    return (
        <div className='my-4 mx-auto'>
            <h3 className="display-5 mx-15" style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>Projects</h3>
            <div className='row table-row'>
                <div className="card mx-3 shadow-sm p-3 mb-5 bg-body rounded" style={{width: 300,}}>
                    <img src={require(`../images/django.jpg`)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className={`btn btn-outline-${props.mode === 'light' ? 'dark':'light'} mx-auto`}
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                            backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>Code</a>
                    </div>
                </div>
                <div className="card mx-3 shadow-sm p-3 mb-5 bg-body rounded" style={{width: 300,}}>
                    <img src={require(`../images/django.jpg`)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className={`btn btn-outline-${props.mode === 'light' ? 'dark':'light'} mx-auto`}
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                            backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>Code</a>
                    </div>
                </div>
                <div className="card mx-3 shadow-sm p-3 mb-5 bg-body rounded" style={{width: 300,}}>
                    <img src={require(`../images/django.jpg`)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className={`btn btn-outline-${props.mode === 'light' ? 'dark':'light'} mx-auto`}
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                            backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>Code</a>
                    </div>
                </div>
            </div>
            <div className="col-3 my-3 mx-auto">
                <a href="https://github.com/kiranchhablani" className="btn" target={`_blank`}>
                    <button type="button" className={`btn btn-outline-${props.mode === 'light' ? 'dark':'light'} mx-auto`}
                        style={{color:props.mode === 'light' ? '#fff':'#17202A', 
                        backgroundColor:props.mode === 'light' ? '#17202A':'#fff'}}>
                            More Projects</button>
                </a>
            </div>
        </div>
    )
}

export default Projects