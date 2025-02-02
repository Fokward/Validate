

import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const[values, setValues]=useState({
    username:'',
    email:'',
    birthday:'',
    password:'',
    confirmPassword:''
  })
  const inputs=[
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Username',
      errorMessage:'Username should be 3-16 and should not include special characters!',
      label:'Username',
      pattern:'^[A-Za-z0-9]{3,9}$',
      required:true
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'Email',
      errorMessage:'Invalid email',
      label:'Email',
      required:true
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Birthday',
      label:'Birthday',
      required:true
    },
    {
      id:4,
      name:'password',
      type:'text',
      placeholder:'Password',
      errorMessage:'Password should be 8-20 characters and includes atleast 1 letter, 1 number and 1 special character',
      label:'Password',
      pattern:'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$',
      required:true
    },
    {
      id:5,
      name:'confirmPassword',
      type:'text',
      placeholder:'Confirm Password',
      errorMessage:'Password do not match',
      label:'Confirm Password',
      pattern:values.password,
      required:true
    }
  ]

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
    
  console.log(values)
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>REGISTER</h1>
        {inputs.map((input)=>(
       <FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange}  />
        ))}
        
        
        <button>Submit</button>
      </form>
    </div>
  );
}


export default App;
