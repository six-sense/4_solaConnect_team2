import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types'

export default function Output(props){ 
    return(
        <Container>
            <MyOutput placeholder={props.sort} readOnly/>
        </Container>    
    )
}

Output.propTypes = {
    sort: propTypes.string,
}

const Container = styled.div`
    ${({theme}) => theme.flexSet()};
    position:relative;
`

const MyOutput = styled.textarea`
    width:50%;
    height:130px;
    background-color: #F0E5DE;
    border:1px solid #9B8281;
    resize:none;
    &:focus {
        outline: none;
    }
    
`