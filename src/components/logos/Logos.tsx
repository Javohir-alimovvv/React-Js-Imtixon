import React, { memo } from 'react'
import "./Logos.scss"
import calvin from "../../assets/image/calvin_klein.png"
import versace from "../../assets/image/versace.png"
import guggi from "../../assets/image/guggi.png"
import parada from "../../assets/image/parada.png"
import zara from "../../assets/image/zara.png"

declare global {
    namespace JSX {
        interface IntrinsicElements {
            marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                direction?: string;
                behavior?: string;
                scrollamount?: number;
            };
        }
    }
}



const Logos: React.FC = () => {
    return (
        <>
            <div className="logo__big">
                <div id="container">
                    <div className='logos'>
                        <marquee className='marquee' direction="left" behavior="scroll" scrollamount={10}>
                            <img className='marquee__image' src={versace} alt="" />
                            <img className='marquee__image' src={zara} alt="" />
                            <img className='marquee__image' src={guggi} alt="" />
                            <img className='marquee__image' src={parada} alt="" />
                            <img className='marquee__image' src={calvin} alt="" />
                            <img className='marquee__image' src={versace} alt="" />
                            <img className='marquee__image' src={zara} alt="" />
                            <img className='marquee__image' src={guggi} alt="" />
                            <img className='marquee__image' src={parada} alt="" />
                            <img className='marquee__image' src={calvin} alt="" />
                            <img className='marquee__image' src={versace} alt="" />
                            <img className='marquee__image' src={zara} alt="" />
                            <img className='marquee__image' src={guggi} alt="" />
                            <img className='marquee__image' src={parada} alt="" />
                            <img className='marquee__image' src={calvin} alt="" />
                            <img className='marquee__image' src={versace} alt="" />
                            <img className='marquee__image' src={zara} alt="" />
                            <img className='marquee__image' src={guggi} alt="" />
                            <img className='marquee__image' src={parada} alt="" />
                            <img className='marquee__image' src={calvin} alt="" />
                        </marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Logos)