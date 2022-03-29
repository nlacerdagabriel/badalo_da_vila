import * as C from './styles'
import { FaQuoteLeft } from 'react-icons/fa'
import { RiStarSLine, RiStarFill } from 'react-icons/ri'


type CardClientsFeedbackProps = {
    img: string;
    description: string;
    name: string;
    job?: string;
}


export function CardClientsFeedback({img, description, name, job} : CardClientsFeedbackProps) {

    return (
        <C.Container>
            {/* <img src={img} alt="" /> */}
            <FaQuoteLeft size={30} />

            <p>{description}</p>

            <div className='name'>
                <h3>{name}</h3>
                <p>{job}</p>
            </div>

            <div className='stars'>
                <RiStarFill color='#fcb71b' size={20} />
                <RiStarFill color='#fcb71b' size={20} />
                <RiStarFill color='#fcb71b' size={20} />
                <RiStarFill color='#fcb71b' size={20} />
                <RiStarFill color='#fcb71b' size={20} />
                {/* <RiStarSLine color='#fcb71b' size={25} /> */}
            </div>

        </C.Container>
    )

}