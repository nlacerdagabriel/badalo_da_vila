import { RedesButton } from '../RedesButton'
import * as C from './styles'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer() {

    const date = new Date()

    return (
        <C.Container>
            <div className='lineOne'>
                <h2>Bela Flor</h2>

                <ul>
                    <a href="#home"><li>Início</li></a>
                    <a href="#gallery"><li>Galeria</li></a>
                    <a href="#feedback"><li>Avaliações</li></a>
                    <a href="#contact"><li>Contato</li></a>
                </ul>

                <div>
                    <RedesButton icon={<FaInstagram />} bgColor='var(--blue-hover)' color='var(--blue)' link='https://www.instagram.com/badalodavila/' />
                    <RedesButton icon={<FaWhatsapp />} bgColor='var(--blue-hover)' color='var(--blue)' link='' />
                </div>
            </div>

            <div className='lineTwo'>
                <p>© Restaurante Badalo da Vila - <span>{date.getFullYear()}</span></p>
            </div>
        </C.Container>
    )
}