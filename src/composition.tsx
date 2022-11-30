interface IButton {
    size?: string
    color?: string
    text?: string
}

export const Button = ({ size, color, text, ...props }: IButton) => {
    return (
        <button
            style={{
                padding: size === 'large' ? '2rem' : '0.5rem',
                fontSize: size === 'large' ? '64px' : '24px',
                backgroundColor: color,
            }}
            {...props}
        >
            {text}
        </button>
    )
}

export const DangerButton = (props: IButton) => {
    return <Button {...props} color="red" />
}
export const BigSuccessButton = (props: IButton) => {
    return <Button {...props} color="green" size="large" />
}
