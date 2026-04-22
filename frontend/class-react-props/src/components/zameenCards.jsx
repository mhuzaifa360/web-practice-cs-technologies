import React from 'react'
import cardImage1 from './images/card1.jpeg'
import cardImage2 from './images/card2.jpeg'
import cardImage3 from './images/card3.jpeg'

export default function ZameenCards() {
  return (
    <div>
      <Card 
      image={cardImage1}
      price='PKR2.88 Crore to 32.1 Crore'
      address1='Zameen Arx, Lahore'
      address2='Lahore, CBD Punjab (PCBDDA)'
      flatOptions='Flats, Penthouse, Offices, Commercial'
      area='225 sqft to 4376 sqft'
      />
      <Card 
      image={cardImage2}
      price='PKR2.3 Crore to 68.5 Crore'
      address1='Zameen Vault, Lahore'
      address2='Lahore, NSIT City'
      flatOptions='Shops, Commercial, Offices, Buildings, Flats'
      area='459 sqft to 15394 sqft'
      />
      <Card 
      image={cardImage3}
      price='PKR1.21 Crore to 31.78 Crore'
      address1='Swiss Mall Gulberg, Lahore'
      address2='Lahore, MM Alam Road'
      flatOptions='Flats, Shops'
      area='125 sqft to 1633 sqft'
      />
     
    </div>
  )
}
function Card(props){

    return(
        <div className='card'>
            <img src={props.image} alt="" />
            <h2>{props.price}</h2>
            <p>{props.address1}</p>
            <p>{props.address2}</p>
            <p>{props.flatOptions}</p>
            <p>{props.area}</p>

        </div>
    )
}