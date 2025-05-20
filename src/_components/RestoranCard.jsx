import React, { useEffect, useState } from 'react'
import './RestoranCard.css'
import { BiRestaurant } from "react-icons/bi";
import data from '../_mockData/Data'

export default function RestoranCard({ name, imageUrl, cuisine, reytinq }) {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const restoran = data.find(x => x.name === name);
        setMenu(restoran?.menu || []);
    }, [name]);

    return (
        <div className='Card'>
            <div className='CardHeader'>
                <div className='ImageCover'>
                    <div className='ImageBorder'>
                        <img src={imageUrl} alt='image' className='CardImage' />
                    </div>
                </div>
            </div>
            <div className='CardBody'>
                <BiRestaurant className='CardIcon' />
                <h1><span>{name}</span> Restaurant</h1>
                <p>{cuisine}</p>
                <p>{reytinq} / 5</p>
            </div>
            <section className='Menu'>
                <div className='MenuContent'>
                    <h1>National Cuisine</h1>
                    <ul>
                        {menu?.map((m) => {
                            return (
                                <li id={m.id}>
                                    <p>{m.name}</p>
                                    <p>{m.price} $</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}
