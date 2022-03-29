import * as C from './styles'
import { ButtonHover } from '../ButtonHover'


export function Home() {
    return (
        <C.Container>
            <C.DarkBg>
                <C.ContainerContent>
                    <p>A melhor padaria da região</p>
                    <h2>Padaria Bela Flor</h2>
                    <p className="descText" >Padaria na Rua Padre Machado, 504 Aberto todos os dias até 22:00 </p>

                    <C.ContainerButton>
                        <ButtonHover content='Contatos' hoverColor='var(--blue-hover)'  primaryColor='var(--blue)' textColor='var(--white)' />
                    </C.ContainerButton>
                </C.ContainerContent>
            </C.DarkBg>

        </C.Container>
    )
}