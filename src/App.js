import Button from "Components/Button";
import ErrorMsg from "Components/ErrorMsg";
import Input from "Components/Input";
import Output from "Components/Output";
import React,{ useState} from "react";

export default function App() {
  const [value,setValue] = useState('');
  const [errMsg,setErrMsg] = useState('');
  const [sortAsc, setSortAsc] = useState([]);
  const [sortDesc, setSortDesc] = useState([]);

  return (
    <>
      <Input value={value} setValue={setValue}/>
      <Button value={value} setErrMsg={setErrMsg} setSortAsc={setSortAsc} setSortDesc={setSortDesc}/>
      <ErrorMsg errMsg={errMsg}/>
      <Output sort="오름차순" sorted={sortAsc}/>
      <Output sort="내림차순" sorted={sortDesc}/>
    </>
  );
}


