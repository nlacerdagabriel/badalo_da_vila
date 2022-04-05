import { SectionTitle } from '../SectionTitle'
import * as C from './styles'
import img1 from '../../assets/chef1.jpg'
import img2 from '../../assets/chef2.jpg'
import img3 from '../../assets/chef3.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export function OurGalery() {

    return (
        <C.Container>
            <SectionTitle>Visite Nosso Espaço</SectionTitle>

            <C.Grid>
                <div><div style={{ backgroundImage: `url(${img1})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img2})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img3})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img1})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img2})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img3})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img1})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img2})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img3})` }} /></div>
            </C.Grid>


            <AwesomeSlider className='slider'>
                <div data-src={img1}></div>
                <div data-src={img2}></div>
                <div data-src={img3}></div>
                <div data-src={img1}></div>
                <div data-src={img2}></div>
                <div data-src={img3}></div>
                <div data-src={img1}></div>
                <div data-src={img2}></div>
                <div data-src={img3}></div>
            </AwesomeSlider>
        </C.Container>
    )
}