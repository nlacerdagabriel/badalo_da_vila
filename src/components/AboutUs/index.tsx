import * as C from './styles'
import jeff from '../../assets/jeff.jpg'
import { ButtonHover } from '../ButtonHover'

export function AboutUs() {
    return (
        <C.Container>
            <C.Image>
                <div>
                    <img src={jeff} alt="" />
                    <p>Antônio <br /><span>Founder</span></p>
                </div>
            </C.Image>

            <C.ContainerText>
                <p>Sobre nós</p>
                <h2>Conheça mais sobre nossa padaria</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <C.OurMission>
                    <h3>Nossos objetivos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.</p>
                </C.OurMission>

                {/* <ButtonHover content='Learn More' textColor='#FFF' primaryColor='var(--blue)' hoverColor='var(--blue-hover)' /> */}
            </C.ContainerText>
        </C.Container>
    )
}