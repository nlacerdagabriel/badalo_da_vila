import * as C from './styles'

export function RedesButton({ icon, color, link, bgColor}) {
    return (
        <a target='blank' href={link}>
            <C.Container bgColor={bgColor} color={color}>
                {icon}
            </C.Container>
        </a>
    )
}