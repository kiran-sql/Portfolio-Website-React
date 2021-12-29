import React from 'react'

const Skills = (props) => {
    return (
        <>
        <h3 className="display-5 mx-15" style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>Skills</h3>
        <div className='container my-3'>
            <div className="row">
                <div className="col-3">
                    <div className="list-group mx-auto" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" 
                            id="list-python-list" data-bs-toggle="list" href="#list-home" 
                            role="tab" aria-controls="list-home" 
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                                backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>
                                Python
                        </a>
                        <a className="list-group-item list-group-item-action" 
                            id="list-javascript-list" data-bs-toggle="list" href="#list-profile" 
                            role="tab" aria-controls="list-profile" 
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                                backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>
                                JavaScript
                        </a>
                        <a className="list-group-item list-group-item-action" 
                            id="list-sql-list" data-bs-toggle="list" href="#list-settings" 
                            role="tab" aria-controls="list-settings"
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                                backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>
                                SQL
                        </a>
                        <a className="list-group-item list-group-item-action" 
                            id="list-html-list" data-bs-toggle="list" href="#list-settings" 
                            role="tab" aria-controls="list-settings"
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                                backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>
                                HTML
                        </a>
                        <a className="list-group-item list-group-item-action" 
                            id="list-css-list" data-bs-toggle="list" href="#list-settings" 
                            role="tab" aria-controls="list-settings"
                            style={{color:props.mode === 'light' ? '#17202A':'#fff', 
                                backgroundColor:props.mode === 'light' ? '#fff':'#17202A'}}>
                                CSS
                        </a>
                    </div>
                </div>
                <div className="col-4">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" 
                            role="tabpanel" aria-labelledby="list-python-list"
                            style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
                                Django
                        </div>
                        <div className="tab-pane fade" id="list-profile" 
                            role="tabpanel" aria-labelledby="list-javascript-list"
                            style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
                            Node.JS, React.JS
                        </div>
                        <div className="tab-pane fade" id="list-messages" 
                            role="tabpanel" aria-labelledby="list-sql-list"
                            style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
                                ...
                        </div>
                        <div className="tab-pane fade" id="list-settings" 
                            role="tabpanel" aria-labelledby="list-css-list"
                            style={{color:props.mode === 'light' ? '#17202A':'#fff'}}>
                                bootstrap
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills