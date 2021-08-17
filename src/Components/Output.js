import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

Output.propTypes = {
    sort: PropTypes.string,
    sorted:PropTypes.array
}

export default function Output(props){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        setData(props.sorted)
    },[props.sorted])
    
    return(
        <Container>
            <MyOutput placeholder={props.sort} value={data} readOnly/>
        </Container>    
    )
}

const Container = styled.div`
    ${({theme}) => theme.flexSet()};
    position:relative;
`

const MyOutput = styled.textarea`
    width:100%;
    height:130px;
    background-color: #F0E5DE;
    border:1px solid #9B8281;
    resize:none;
    font-size:17px;
    &:focus {
        outline: none;
    }
    
`