import Button from "Components/Button";
import Input from "Components/Input";
import Output from "Components/Output";
import React from "react";


export default function App() {
  return (
    <>
      <Input/>
      <Button/>
      <Output sort="오름차순" />
      <Output sort="내림차순"/>
    </>
  );
}

