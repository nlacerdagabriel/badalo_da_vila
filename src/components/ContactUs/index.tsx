import { RedesButton } from '../RedesButton'
import * as C from './styles'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ButtonHover } from '../ButtonHover'


export function ContactUs() {
    return (
        <C.Container id='contact'>
            <C.ContainerContent>
                <div className="contato">
                    <h2>Contato</h2>

                    <div>
                        <RedesButton icon={<FaInstagram />} bgColor='var(--blue)' color='var(--white)' link='https://www.instagram.com/badalodavila/' />
                        <RedesButton icon={<FaWhatsapp />} bgColor='var(--blue)' color='var(--white)' link='' />
                    </div>
                    
                    <a href="tel:+1125943239">
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
                    <p>R. Afonso Celso, S/N - 943 - Vila Mariana, São Paulo - SP. Aberto todos os dias das 06:00 até 22:00</p>
                    <a target='_blank' href="https://www.google.com/maps/place/R.+Afonso+Celso,+943+-+Vila+Mariana,+S%C3%A3o+Paulo+-+SP,+04119-060/@-23.5998359,-46.6369759,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5a33998304e9:0x2c26deae87a5d4d9!8m2!3d-23.5998359!4d-46.6347872">
                        <ButtonHover content='&nbsp;&nbsp;Ver rotas&nbsp;&nbsp;' hoverColor='var(--blue)' primaryColor='var(--text-black)' textColor='var(--white)' />
                    </a>
                </div>

            </C.ContainerContent>
        </C.Container>
    )
}