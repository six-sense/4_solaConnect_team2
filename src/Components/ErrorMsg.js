import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

export default function ErrorMsg(props){
    return(
        <Container>
            <MsgLayout>{props.errMsg}</MsgLayout>
        </Container>
    )
}

ErrorMsg.propTypes = {
    errMsg: propTypes.string
}
const Container = styled.div`
    ${({theme}) => theme.flexSet()};
    position:relative;
`

const MsgLayout  = styled.div`
    width:50%;
    height:auto;
    font-size: 15px;
    color:red;
    font-weight: 600;
`;