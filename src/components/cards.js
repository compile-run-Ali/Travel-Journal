import React from 'react'
import { GrLocation } from "react-icons/gr";


export default function Cards(props){
    return(
        <div className="card">
           <img src={props.imageUrl} />
            <div className='info'>
                <p className='loc'><GrLocation/> {props.location}<a href={props.googleMapsUrl}>View on Google Maps</a></p>
                <h2>{props.title}</h2>
                <p className='date'>{props.startDate} - {props.endDate}</p>
                <p className='para'>{props.description}</p>
            </div>
        </div>
    )
}