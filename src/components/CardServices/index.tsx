import * as C from './styles'


type CardServicesProps = {
    children: string;
    icon: React.ReactNode;
    title: string;
    items: string[];
}

export function CardServices({children, icon, title, items }: CardServicesProps) {
    return (
        <C.Container>
            <C.Header>
                {icon}
                <h3>{title}</h3>
                <p>{children}</p>
            </C.Header>
            <C.Items>
                    {items.map((item) => (
                        <li>{item}</li>
                    ))}
            </C.Items>
        </C.Container>
    )
}