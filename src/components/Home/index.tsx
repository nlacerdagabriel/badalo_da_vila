import * as C from './styles'
import { ButtonHover } from '../ButtonHover'


export function Home() {
    return (
        <C.Container>
            <C.DarkBg>
                <C.ContainerContent>
                    <p>Cakes and Cookies for you</p>
                    <h2>the best place for the bread and cakes</h2>
                    <p className="descText" >We strive for consistency so that each visit to
                    our bakery delivers the same reliably satisfying
                    experience while offering an exciting variety of products.</p>

                    <C.ContainerButton>
                        <ButtonHover content='Get started' hoverColor='#d9d9d9'  primaryColor='var(--white)' textColor='var(--text-black)' />
                        <ButtonHover content='Contact us' hoverColor='var(--blue-hover)'  primaryColor='var(--blue)' textColor='var(--white)' />
                    </C.ContainerButton>
                </C.ContainerContent>
            </C.DarkBg>

        </C.Container>
    )
}