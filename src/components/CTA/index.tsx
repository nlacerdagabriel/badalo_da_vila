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


            <C.Buttons>
                <ButtonHover content='PEÇA PELO IFOOD' primaryColor='#EA1C2D' hoverColor='#750b13' textColor='#FFF' />
            </C.Buttons>

            <img src={imgCTA} alt="" />
        </C.Container>
    )

}