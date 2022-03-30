import * as C from './styles'
import { ButtonHover } from '../ButtonHover'


export function Home() {
    return (
        <C.Container id='home'>
            <C.DarkBg>
                <C.ContainerContent>
                    <p>A melhor padaria da região</p>
                    <h2>Padaria Bela Flor</h2>
                    <p className="descText" >Padaria na Rua Padre Machado, 504 Aberto todos os dias das 06:00 até 22:00 </p>

                    <C.ContainerButton>
                        <a href="#contact">
                            <ButtonHover content='Contatos' hoverColor='var(--blue-hover)' primaryColor='var(--blue)' textColor='var(--white)' />
                        </a>
                    </C.ContainerButton>
                </C.ContainerContent>
            </C.DarkBg>

        </C.Container>
    )
}