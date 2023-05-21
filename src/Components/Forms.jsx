import React, { useState } from 'react'
















function Forms() {
  const styles = {
    width: "40vw",
    height: "40px",
    borderRadius: "10px",
    padding: "2px",
    marginBottom : "15px",
  }













  const [data, setData] = useState({});
  const [AddData, setAddData] = useState([]);
  function addData() {
    let _data1 = document.getElementById("inp1").value;
    let _data2 = document.getElementById("inp2").value;
    let _data3 = document.getElementById("inp3").value;
    let _data4 = document.getElementById("inp4").value;

    let obj =  {
      firstName: _data1,
      lastName: _data2,
      email: _data3,
      password: _data4
    }

    setData(obj);
    AddData.push(data);
    setAddData([...AddData]);
    
    console.log(AddData);
   


    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
    document.getElementById("inp3").value = "";
    document.getElementById("inp4").value = "";
  }


  return (
    
    <div className='container mt-5'>
      <center>
        <h1>REGISTRATION FORM</h1>
      </center>

      <label className='fw-bold' htmlFor="firstName">First Name: </label><br />
      <input id='inp1' style={styles} type="text" required />
      <br />
      <label className='fw-bold' htmlFor="lastName">Last Name: </label><br />
      <input id='inp2' style={styles} type="text" required /><br />
      <label className='fw-bold' htmlFor="email"> Email:</label><br />
      <input id='inp3' style={styles} type="text" required /><br />
      <label className='fw-bold' htmlFor="password">Password: </label><br />
      <input placeholder='******'  id='inp4' style={styles} type="password" required /><br /><br />

      <button onClick={addData} className='btn btn-lg btn-primary'>Sign Up</button>
    </div>
  )
}

export default Forms
