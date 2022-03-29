import { ButtonHover } from '../ButtonHover'
import * as C from './styles'
import ifood from '../../assets/ifood.webp'
import {GiBowlOfRice} from 'react-icons/gi'

export function CTA() {

    return (
        <C.Container>
            <GiBowlOfRice size="3rem"  color='var(--blue)'/>
            <h2>
                Peça sem sair de casa!
            </h2>


            <C.Buttons>
                <ButtonHover content='PEÇA PELO IFOOD' primaryColor='#EA1C2D' hoverColor='#750b13' textColor='#FFF' />
            </C.Buttons>

            <img src={ifood} alt="" />
        </C.Container>
    )

}