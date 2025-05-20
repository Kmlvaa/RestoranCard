import React from 'react'
import './RestoranCard.css'
import { BiRestaurant } from "react-icons/bi";

export default function RestoranCard({ name, imageUrl, cuisine, reytinq }) {
    return (
        <div className='Card'>
            <div className='CardHeader'>
                <div className='ImageCover'>
                    <div className='ImageBorder'>
                        <img src={imageUrl} alt='Restoran image' className='CardImage' />
                    </div>
                </div>
            </div>
            <div className='CardBody'>
                <BiRestaurant className='CardIcon' />
                <h1><span>{name}</span> Restaurant</h1>
                <p>{cuisine}</p>
                <p>{reytinq} / 5</p>
            </div>
        </div>
    )
}
