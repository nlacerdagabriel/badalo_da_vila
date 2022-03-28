import { ButtonHover } from '../ButtonHover'
import * as C from './styles'
import imgCTA from '../../assets/imgCTA.jpg'
import {GiBowlOfRice} from 'react-icons/gi'

export function CTA() {

    return (
        <C.Container>
            <GiBowlOfRice size="3rem"  color='var(--blue)'/>
            <h2>
                You Provide <span>The Vision </span>
                We Provide The Solution.
            </h2>

            <p>Our Cakes And Cookies is made from freshly
                ground wheat berries and other organic <br /> ingredients!</p>

            <C.Buttons>
                <ButtonHover content='Donwload App' primaryColor='var(--text-black)' hoverColor='#000' textColor='#FFF' />
                <ButtonHover content='Subscribe' primaryColor='var(--blue)' hoverColor='var(--blue-hover)' textColor='#FFF' />
            </C.Buttons>

            <img src={imgCTA} alt="" />
        </C.Container>
    )

}