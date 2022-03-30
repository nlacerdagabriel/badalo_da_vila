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
        <h2>Padaria Bela Flor</h2>
      </div>

      <C.Contato>
        <a href="tel:+551133333334">
          <li><IoIosPhonePortrait /> Ligar Agora</li>
        </a>
        <a target='_blank' href="https://www.google.com/maps/place/R.+Padre+Machado,+504+-+Bosque+da+Sa%C3%BAde,+S%C3%A3o+Paulo+-+SP,+04127-001/data=!4m2!3m1!1s0x94ce5bcb2c8a6cbf:0x1bbb667aaa0f3bf3?sa=X&ved=2ahUKEwiZvd-xpef2AhXoD7kGHWNFBSIQ8gF6BAgWEAE">
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

          <a target='_blank' href="https://www.ifood.com.br/delivery/sao-paulo-sp/padaria-bela-flor-bosque-da-saude/0b41aaee-e5e0-4501-a2e6-b0ee81b34cc2?UTM_Medium=share">
            <ButtonHover content='Peça pelo IFOOD' hoverColor='#750b13' primaryColor='#EA1C2D' textColor='var(--white)' />
          </a>
        </div>
      </C.MenuContainer>
    </C.Container >
  )
}