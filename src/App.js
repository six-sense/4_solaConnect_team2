import React,{useState} from "react";
import Button from "Components/Button";
import ErrorMsg from "Components/ErrorMsg";
import CurrentDate from 'Components/CurrentDate';
import Input from "Components/Input";
import Output from "Components/Output";
import styled from 'styled-components';

export default function App() {
  const [value,setValue] = useState('');
  const [errMsg,setErrMsg] = useState('');
  const [sortAsc, setSortAsc] = useState([]);
  const [sortDesc, setSortDesc] = useState([]);

  return (
      <Container>
      <Wrap>
        <CurrentDate country="ko" />
        <Input value={value} setValue={setValue}/>
        <Button value={value} setErrMsg={setErrMsg} setSortAsc={setSortAsc} setSortDesc={setSortDesc}/>
        <ErrorMsg errMsg={errMsg}/>
        <Output sort="오름차순" sorted={sortAsc}/>
        <Output sort="내림차순" sorted={sortDesc}/>
        <CurrentDate country="us" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

const Wrap = styled.div`
  width: 700px;
`;
