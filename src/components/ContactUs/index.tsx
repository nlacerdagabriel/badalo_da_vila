import { RedesButton } from '../RedesButton'
import * as C from './styles'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ButtonHover } from '../ButtonHover'


export function ContactUs() {
    return (
        <C.Container>
            <C.ContainerContent>
                <div className="contato">
                    <h2>Contato</h2>


                    <div>
                        <RedesButton icon={<FaInstagram />} bgColor='var(--blue)' color='var(--white)' link='' />
                        <RedesButton icon={<FaWhatsapp />} bgColor='var(--blue)' color='var(--white)' link='' />
                    </div>
                    
                    <a href="tel:+551133333334">
                        <ButtonHover content='Ligar agora' hoverColor='var(--blue)' primaryColor='var(--text-black)' textColor='var(--white)' />
                    </a>
                </div>
                <div className="ifood">
                    <h2>Peça pelo Ifood!</h2>
                    <a target='_blank' href="">
                        <ButtonHover content='&nbsp;&nbsp;Ifood&nbsp;' hoverColor='#750b13' primaryColor='#EA1C2D' textColor='var(--white)' />
                    </a>

                    <p>Estamos disponíveis de Segunda à Segunda das 06:00 até às 22:00</p>
                </div>
                <div className="endereco">
                    <h2>Endereço</h2>
                    <p>Rua lorem ipsum, 222 lorem ipsum
                        São Paulo - SP Brasil</p>
                    <a target='_blank' href="">
                        <ButtonHover content='&nbsp;&nbsp;Ver rotas&nbsp;&nbsp;' hoverColor='var(--blue)' primaryColor='var(--text-black)' textColor='var(--white)' />
                    </a>
                </div>

            </C.ContainerContent>
        </C.Container>
    )
}