import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
interface IPaneFlexProps {
    weight: number
}

const Pane = styled.div<IPaneFlexProps>`
    flex: ${props => props.weight};
`

function SplitScreen({
    // components as props
    // left: Left,
    // right: Right,

    // using children
    children,
    leftWeight = 1,
    rightWeight = 1,
}: {
    // left: React.FunctionComponent
    // right: React.FunctionComponent
    children: React.ReactNode[]
    leftWeight: number
    rightWeight: number
}) {
    // using children
    const [left, right] = children
    return (
        <Container>
            <Pane weight={leftWeight}>
                {/* <Left /> */}
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {/* <Right /> */}
                {right}
            </Pane>
        </Container>
    )
}

export default SplitScreen
