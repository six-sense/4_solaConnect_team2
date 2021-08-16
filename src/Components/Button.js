import React from 'react';
import styled,{css} from 'styled-components';

export default function Button(){
    return (
        <Container>
            <MyButton>시작</MyButton>
        </Container>
    )
}

const Container = styled.div`
    ${({theme}) => theme.flexSet()};
`;

const ButtonLayout = css`
    background-color: #6E7783;
    border-radius: 5px;
    font-size:17px;
    color:white;
    
`;

const MyButton = styled.button`
    display:block;
    width:15%;
    height:50px;
    cursor: pointer;
    box-sizing:border-box;
    ${ButtonLayout}
`;
