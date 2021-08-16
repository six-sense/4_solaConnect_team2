import React from 'react';
import styled,{css} from 'styled-components';
import propTypes from 'prop-types';
import { filter_input } from "utils/filter_input";
import { MinHeap } from 'utils/min_heap';
import { MaxHeap } from 'utils/max_heap';

export default function Button(props){
    const onClickBtn = () => {
        let [result, errMsg] = filter_input(props.value);
        
        
        errMsg ? props.setErrMsg('허용되지 않는 문자는 자동 제거된 후 정렬됩니다.'): props.setErrMsg('')
        console.log(result, errMsg)
        
        sortAsc(result)
    }

    const sortAsc = (result) => {
        let minHeap = new MinHeap();
        let sortAscItem = [];

        for(let value of result){
            minHeap.heappush(value)
        }
        
        while (minHeap.size()>0){
            sortAscItem.push(minHeap.heappop())
        }
        props.setSortAsc(sortAscItem)

        setTimeout(()=>sortDesc(result), 3000)
    }

    const sortDesc = (result) => {
        // console.log(result)
        let maxHeap = new MaxHeap();
        let sortDescItem = [];

        for(let value of result){
            maxHeap.heappush(value)
        }
        
        while (maxHeap.size()>0){
            sortDescItem.push(maxHeap.heappop())
        }
        props.setSortDesc(sortDescItem)
    }

    return (
        <Container>
            <MyButton onClick={onClickBtn}>시작</MyButton>
        </Container>
    )
}

Button.propTypes = {
    value:propTypes.string,
    setErrMsg:propTypes.func,
    setSortAsc:propTypes.func,
    setSortDesc:propTypes.func,
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
