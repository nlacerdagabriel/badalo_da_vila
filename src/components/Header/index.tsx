import * as C from './styles'
import { FaRoute } from 'react-icons/fa'
import { IoIosPhonePortrait } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import { useState } from 'react'

export function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function openMenu(){
        setMenuIsOpen(!menuIsOpen)
    }


    return (
        <C.Container>

            <div className='hamburguer'>
                <button onClick={openMenu}>
                    {menuIsOpen ? <CgClose/> : <GiHamburgerMenu/> }
                </button>
                <h2>Padaria Bela Flor</h2>
            </div>

            <ul>
                <li><IoIosPhonePortrait /> Ligar Agora</li>
                <li><FaRoute /> Ver Rotas</li>
            </ul>

            <C.MenuContainer width={menuIsOpen ? '400px' : '0px'}>

            </C.MenuContainer>
        </C.Container>
    )
}