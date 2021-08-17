import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

ErrorMsg.propTypes = {
    errMsg: PropTypes.string
}

export default function ErrorMsg(props){
    return(
        <Container>
            <MsgLayout>{props.errMsg}</MsgLayout>
        </Container>
    )
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