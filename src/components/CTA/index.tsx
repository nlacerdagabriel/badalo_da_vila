import { ButtonHover } from '../ButtonHover'
import * as C from './styles'
import ifood from '../../assets/ifood.webp'
import { GiBowlOfRice } from 'react-icons/gi'

export function CTA() {

    return (
        <C.Container>
            <GiBowlOfRice size="3rem" color='var(--blue)' />
            <h2>
                Peça sem sair de casa!
            </h2>


            <C.Buttons>
                <a target='_blank' href='https://www.ifood.com.br/delivery/sao-paulo-sp/padaria-bela-flor-bosque-da-saude/0b41aaee-e5e0-4501-a2e6-b0ee81b34cc2?UTM_Medium=share'>
                    <ButtonHover content='PEÇA PELO IFOOD' primaryColor='#EA1C2D' hoverColor='#750b13' textColor='#FFF' />
                </a>
            </C.Buttons>

            <img src={ifood} alt="" />
        </C.Container>
    )

}