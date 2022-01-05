import React from 'react'

const Skills = (props) => {
    return (
        <div className='container my-5'>
        <h3 className="display-5 mx-auto" style={{color:props.mode === 'light' ? '#17202A':'#fff', textAlign:'center'}}>Skills</h3>
        <ul class="list-group list-group-flush fs-4">
            <li class="list-group-item"><ion-icon name="logo-python"></ion-icon></li>
            <li class="list-group-item"><ion-icon name="logo-javascript"></ion-icon></li>
            <li class="list-group-item"><ion-icon name="logo-nodejs"></ion-icon></li>
            <li class="list-group-item"><ion-icon name="logo-html5"></ion-icon></li>
            <li class="list-group-item"><ion-icon name="logo-react"></ion-icon></li>
            <li class="list-group-item"><ion-icon name="logo-css3"></ion-icon></li>
        </ul>
        </div>
    )
}

export default Skills