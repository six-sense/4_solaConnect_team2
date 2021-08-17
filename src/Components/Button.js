import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { filterInput } from 'utils/filterInput';
import { MinHeap } from 'utils/minHeap';
import { MaxHeap } from 'utils/maxHeap';

Button.propTypes = {
  value: PropTypes.string,
  setErrMsg: PropTypes.func,
  setSortAsc: PropTypes.func,
  setSortDesc: PropTypes.func,
};

export default function Button(props) {
  const onClickBtn = () => {
    let [result, errMsg] = filterInput(props.value);
    errMsg
      ? props.setErrMsg('허용되지 않는 문자는 자동 제거된 후 정렬됩니다.')
      : props.setErrMsg('');
    sortAsc(result);
  };

  const sortAsc = (result) => {
    let minHeap = new MinHeap();
    let sortAscItem = [];

    for (let value of result) {
      minHeap.heappush(value);
    }

    while (minHeap.size() > 0) {
      sortAscItem.push(minHeap.heappop());
    }
    props.setSortAsc(sortAscItem);

    setTimeout(() => sortDesc(result), 3000);
  };

  const sortDesc = (result) => {
    let maxHeap = new MaxHeap();
    let sortDescItem = [];

    for (let value of result) {
      maxHeap.heappush(value);
    }

    while (maxHeap.size() > 0) {
      sortDescItem.push(maxHeap.heappop());
    }
    props.setSortDesc(sortDescItem);
  };

  return (
    <Container>
      <MyButton onClick={onClickBtn}>시작</MyButton>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const ButtonLayout = css`
  background-color: #6e7783;
  border-radius: 5px;
  font-size: 17px;
  color: white;
`;

const MyButton = styled.button`
  display: block;
  width: 30%;
  height: 50px;
  cursor: pointer;
  box-sizing: border-box;
  ${ButtonLayout}
`;
