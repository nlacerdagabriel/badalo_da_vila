import { useEffect, useState } from 'react'
import AnimatedNumber from 'react-animated-number'
import { useInView } from "react-intersection-observer";



export function AnimatedNumberC({ value, fontSize }) {

    const [numberRef, numberInView] = useInView({
        triggerOnce: true,
    });

    return (
        <p ref={numberRef}>
            {numberInView && (
                <AnimatedNumber
                    value={value}
                    duration={4000}
                    formatValue={n => n.toFixed(0)}
                    style={
                        {
                            fontSize: fontSize,
                        }
                    }
                />
            )}
            <span>+</span>
        </p>
    )
}