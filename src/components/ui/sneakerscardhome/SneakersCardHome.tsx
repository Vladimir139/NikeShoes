import { ISneakers } from '@data/sneakersTypes';
import React, { FC } from 'react'
import {
    SneakersImage,
    SneakersItem,
    SneakersPrice,
    SneakersTitle
} from './SneakersCardElements';


const SneakersCardHome: FC<ISneakers> = ({ urlImg, title, price, id }) => {
    return (
        <SneakersItem key={id}>
            <SneakersImage src={urlImg} />
            <SneakersTitle>{title}</SneakersTitle>
            <SneakersPrice>{price}</SneakersPrice>
        </SneakersItem>
    )
}

export default SneakersCardHome;