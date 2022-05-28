import React, { useState } from 'react'

const initState= {
    name:"",
    isMarried:"",
    gender:"",
    email:"",
    sex:"",
    file:""
}

const Personal_form = () => {
    const [formData, setFormData] = React.useState(initState)
    const fileRef = React.useRef()

    const mailRef = React.useRef()

    const handleChange=(e)=> {
        let {name,value,checked,type,files}= e.target;
        // value=type=="checked" ? checked : value;

        if(type=="checkbox")
        {
            setFormData((prev)=> ({...prev, [name]:checked}))
        }
        else if(type==="file")
        {
            setFormData((prev)=> ({...prev, [name]:files[0]}))
        }
        else
        {
            setFormData((prev)=> ({...prev, [name]:value}))
        }


        
    }

    const onSubmit=(e)=> {
        e.preventDefault();
        console.log(formData)
        console.log(fileRef.current.files)

        if(!formData.email)
        {
            mailRef.current.focus();
        }

    }

    const {name, isMarried,gender,email,sex,file}=formData

  return (
    <div>
        <h1>Personal_form</h1>
        <form onSubmit={onSubmit} action="">
            <label htmlFor="">
                Name:
                <input onChange={handleChange} type="text" placeholder='Name' name='name' value={name}/>
            </label>
            <label htmlFor="">
                Email:
                <input ref={mailRef} onChange={handleChange} type="text" placeholder='email' name='email' value={email}/>
            </label>
            <br />
            <label htmlFor="">
                Married 
                <input onChange={handleChange} type="checkbox" name='isMarried' checked={isMarried} />
            </label>
            <br />
            Gender: {" "}
            <select onChange={handleChange} name="gender" value={gender} id="">
                <option value="">Select</option>
                <option value="M">Male</option>
                <option value="F">FeMale</option>
                <option value="D">Do not want to disclose</option>
            </select>
            <br />
            <label htmlFor="">
                Male:
                <input type="radio" name='sex' value="Male" onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="">
                Female:
                <input type="radio" name='sex' value="Female" onChange={handleChange} />
            </label>
            <br />
            <input type="file" name='file' onChange={handleChange} file={file}  ref={fileRef}  />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Personal_form