import React from 'react'
import palps from '../img/palps.jpg';

export const Nosotros = () => (


    <div className="d-flex align-items-center" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <div className="card-nosotros" style={{width: '18rem'}}>
    <h1> Nosotros </h1>
       <img src={palps} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Copy pasta</h5>
         <p className="card-text">Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.</p>

       </div>
     </div>
    </div>

)
