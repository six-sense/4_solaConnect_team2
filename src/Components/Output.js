import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types'

export default function Output(props){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        console.log(props.sorted)
        setData(props.sorted)
    },[props.sorted])
    return(
        <Container>
            <MyOutput placeholder={props.sort} value={data} readOnly/>
        </Container>    
    )
}

Output.propTypes = {
    sort: propTypes.string,
    sorted:propTypes.array
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
    font-size:17px;
    &:focus {
        outline: none;
    }
    
`