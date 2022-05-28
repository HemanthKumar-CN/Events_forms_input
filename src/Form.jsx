import React from 'react'

const initState = {
    name:"",
    email:"",
    phone:""
}

const Form = () => {
    const [data, setData] = React.useState(initState)
    const [dataArray, setDataArray] = React.useState([])
    const [time, setTime] = React.useState(new Date().toLocaleString())

    const handleChange=(e)=> {
        const {name,value}=e.target;

        setData({...data,[name]:value});
    }

    const {name,email,phone}=data;

    
    React.useEffect(() => {
      
        setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000);
    
      return () => {
        
      }
    },[time])
    

    // console.log(dataArray)
    return (
    <div>
        <h2>{time}</h2>
        <h1>Form</h1>
        <input type="text" value={name} onChange={handleChange} name="name" placeholder='Name' />
        <br />
        <input type="email" value={email} onChange={handleChange} name="email" placeholder='email' />
        <br />
        <input type="text" onChange={handleChange} value={phone} name="phone" placeholder='phone' />
        <br />
        <br />
        <button onClick={()=> {
            // console.log(data)
            setDataArray([...dataArray,data])
            setData(initState)
        }}>Add</button>
    </div>
  )
}

export default Form