import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GemsMantra from './components/GemsMantra/GemsMantra';
import GemsMantraResult from './components/GemsMantra/GemsMantraResult';
import { useState } from 'react';
function App() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [gender,setGender] = useState();
  const [bodyWeight,setBodyWeight] = useState();
  const [date,setDate] = useState();
  const [time,setTime] = useState();
  const [place,setPlace] = useState();

  return (
    <>
      <GemsMantra setName={setName} setEmail={setEmail} setPhone={setPhone} setGender={setGender} />
      {/* <GemsMantraResult /> */}
    </>
  );
}

export default App;
