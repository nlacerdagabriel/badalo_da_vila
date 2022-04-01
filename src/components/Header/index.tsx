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
        <h2>Badalo da Vila</h2>
      </div>

      <C.Contato>
        <a href="tel:+1125943239">
          <li><IoIosPhonePortrait /> Ligar Agora</li>
        </a>
        <a target='_blank' href="https://www.google.com/maps/place/R.+Afonso+Celso,+943+-+Vila+Mariana,+S%C3%A3o+Paulo+-+SP,+04119-060/@-23.5998359,-46.6369759,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5a33998304e9:0x2c26deae87a5d4d9!8m2!3d-23.5998359!4d-46.6347872">
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