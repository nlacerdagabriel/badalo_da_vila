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

                    <a href="tel:+551133333334">
                        <ButtonHover content='Ligar agora' hoverColor='var(--blue)' primaryColor='var(--text-black)' textColor='var(--white)' />
                    </a>

                    <div>
                        <RedesButton icon={<FaInstagram />} bgColor='var(--blue)' color='var(--white)' link='https://www.instagram.com/belaflorpadaria/' />
                        <RedesButton icon={<FaWhatsapp />} bgColor='var(--blue)' color='var(--white)' link='https://www.instagram.com/belaflorpadaria/' />
                    </div>
                </div>
                <div className="ifood">
                    <h2>Peça pelo Ifood!</h2>
                    <a target='_blank' href="https://www.ifood.com.br/delivery/sao-paulo-sp/padaria-bela-flor-bosque-da-saude/0b41aaee-e5e0-4501-a2e6-b0ee81b34cc2?UTM_Medium=share">
                        <ButtonHover content='&nbsp;&nbsp;Ifood&nbsp;' hoverColor='#750b13' primaryColor='#EA1C2D' textColor='var(--white)' />
                    </a>

                    <p>Estamos disponíveis de Segunda à Sexta das 06:00 até às 22:00</p>
                </div>
                <div className="endereco">
                    <h2>Endereço</h2>
                    <p>Rua Padre Machado, 504 Bosque da Saúde
                        São Paulo - SP 04127-000 Brasil</p>
                    <a target='_blank' href="https://www.google.com/maps/place/R.+Padre+Machado,+504+-+Bosque+da+Sa%C3%BAde,+S%C3%A3o+Paulo+-+SP,+04127-001/data=!4m2!3m1!1s0x94ce5bcb2c8a6cbf:0x1bbb667aaa0f3bf3?sa=X&ved=2ahUKEwiZvd-xpef2AhXoD7kGHWNFBSIQ8gF6BAgWEAE">
                        <ButtonHover content='&nbsp;&nbsp;Ver rotas&nbsp;&nbsp;' hoverColor='var(--blue)' primaryColor='var(--text-black)' textColor='var(--white)' />
                    </a>
                </div>

            </C.ContainerContent>
        </C.Container>
    )
}