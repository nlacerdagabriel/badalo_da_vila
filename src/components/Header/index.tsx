import * as C from './styles'
import {FaRoute} from 'react-icons/fa'
import {IoIosPhonePortrait} from 'react-icons/io'

export function Header(){
    return(
        <C.Container>
            <h2>Padaria Bela Flor</h2>

            <ul>
                <li><IoIosPhonePortrait/> Ligar Agora</li>
                <li><FaRoute/> Ver Rotas</li>
            </ul>
        </C.Container>
    )
}