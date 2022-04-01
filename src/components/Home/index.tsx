import * as C from './styles'
import { ButtonHover } from '../ButtonHover'


export function Home() {
    return (
        <C.Container id='home'>
            <C.DarkBg>
                <C.ContainerContent>
                    <p>O melhor restaurante da região</p>
                    <h2>Badalo da Vila</h2>
                    <p className="descText" >R. Afonso Celso, S/N - 943 - Vila Mariana, São Paulo - SP.
                        Aberto todos os dias das 06:00 até 22:00 </p>

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