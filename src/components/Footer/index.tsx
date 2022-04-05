import { RedesButton } from '../RedesButton'
import * as C from './styles'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer() {

    const date = new Date()

    return (
        <C.Container>
            <div className='lineOne'>
                <h2>Logo da Empresa</h2>

                <ul>
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>Feedbacks</li>
                    <li>Contact</li>
                </ul>

                <div>
                    <RedesButton icon={<FaInstagram />} bgColor='var(--blue-hover)' color='var(--blue)' link='' />
                    <RedesButton icon={<FaWhatsapp />} bgColor='var(--blue-hover)' color='var(--blue)' link='' />
                </div>
            </div>

            <div className='lineTwo'>
                <p>© Nome da Empresa - <span>{date.getFullYear()}</span></p>
            </div>
        </C.Container>
    )
}