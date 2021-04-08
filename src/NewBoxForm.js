import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm(props) {

  const initialState = {height:"", width:"", backgroundColor:""};
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const {name, value} = evt.target
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  function getFormData(evt) {
    evt.preventDefault();
    let data
    if (parseInt(formData.height) > 0 && parseInt(formData.width) > 0) {
      data = {...formData, id:uuid(), height:formData.height + "px", width:formData.width + "px" }
    } else {
      data = {id:uuid()}
    }
    props.add(data);
  }

  return (
    <form onSubmit={getFormData}>
      <label htmlFor="height">Height</label>
      <input id="height" onChange={handleChange} name="height" value={formData.height}></input>
      <label htmlFor="width">Width</label>
      <input id="width" name="width" onChange={handleChange} value={formData.width}></input>
      <label htmlFor="backgroundColor">Background Color</label>
      <input id="backgroundColor" onChange={handleChange} name="backgroundColor" value={formData.backgroundColor}></input>
      <button >Add Box</button>
    </form>
  )
}

export default NewBoxForm;