import { RedesButton } from '../RedesButton';
import * as C from './styles'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'


export function CardChef({ img, name, cargo }) {
    return (
        <C.Container>
            <div style={{ backgroundImage: `url(${img})` }}>
                <C.HoverContainer>
                    <div className="first">
                        <h3>{name}</h3>
                        <p>{cargo}</p>
                    </div>
                    <div className="second">
                        <RedesButton bgColor='var(--blue-hover)' icon={<FaFacebookF />} color='var(--white)' />
                        <RedesButton bgColor='var(--blue-hover)' icon={<FaInstagram />} color='var(--white)' />
                        <RedesButton bgColor='var(--blue-hover)' icon={<FaTwitter />} color='var(--white)' />
                    </div>
                </C.HoverContainer>
            </div>
        </C.Container>
    )
}