import * as C from './styles'
import { FaRoute } from 'react-icons/fa'
import { IoIosPhonePortrait } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import { ButtonHover } from '../ButtonHover'
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'
import { MdPeopleOutline } from 'react-icons/md'
import { GrGallery } from 'react-icons/gr'
import { VscFeedback } from 'react-icons/vsc'

export function Header() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleMenuOpen() {
    setMenuIsOpen(!menuIsOpen)
  }

  function closeMenuFromMenuMobile() {
    setTimeout(() => {
      handleMenuOpen()
    }, 500)
  }


  return (
    <C.Container>
      <button className='hamburguer' onClick={handleMenuOpen}>
        {menuIsOpen ? <CgClose /> : <GiHamburgerMenu />}
      </button>

      <div className='logo'>
        <h2>Nome da Empresa</h2>
      </div>

      <C.Contato>
        <a href="">
          <li><IoIosPhonePortrait /> Ligar Agora</li>
        </a>
        <a target='_blank' href="">
          <li><FaRoute /> Ver Rotas</li>
        </a>
      </C.Contato>

      <C.MenuContainer className={menuIsOpen ? 'menuOpen' : 'menu'}>
        <div>
          <ul>
            <a href="#home" onClick={closeMenuFromMenuMobile}><li ><AiOutlineHome /> Início</li></a>
            <a href="#about" onClick={closeMenuFromMenuMobile}><li><MdPeopleOutline /> Sobre Nós</li></a>
            <a href="#gallery" onClick={closeMenuFromMenuMobile}><li><GrGallery id='galleryIcon' />Galeria</li></a>
            <a href="#feedback" onClick={closeMenuFromMenuMobile}><li><VscFeedback id='feedbackIcon' />Avaliações</li></a>
            <a href="#contact" onClick={closeMenuFromMenuMobile}><li><AiOutlinePhone id='contactIcon' />Contato</li></a>
          </ul>

          <a target='_blank' href="">
            <ButtonHover content='Peça pelo IFOOD' hoverColor='#750b13' primaryColor='#EA1C2D' textColor='var(--white)' />
          </a>
        </div>
      </C.MenuContainer>
    </C.Container >
  )
}