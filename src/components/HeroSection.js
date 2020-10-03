import { Link } from 'gatsby';
import React from 'react'
import "./style.scss";
import {IoIosArrowDropright} from 'react-icons/io'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1 className='title is-uppercase'>Don't Use<br /> Machines <br /> Become <span className='has-text-info'>One.</span></h1>
            <Link to='/subs'>
                <button className='button is-info is-rounded is-large heroButton '>Prueba Gratis &nbsp;<IoIosArrowDropright/></button>
            </Link>
        </div>
    )
}

export default HeroSection
