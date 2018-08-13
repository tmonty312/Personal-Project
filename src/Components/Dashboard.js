import React from 'react'
import Puppy from './Puppy'

function Dashboard(props){
    let puppyMap = props.puppy.map(s => {
        return <Puppy key={s.name} updatePuppy={props.updatePuppy} s={s}/>
      })
    return(
        <div className= "dashboard">
            {puppyMap}
        </div>
    )
}

export default Dashboard