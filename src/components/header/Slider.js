import React from "react";
import {RangeStepInput} from 'react-range-step-input';

const Slider = (props) => {

  const onChange = (e) => {
    const newVal = e.target.value;
    //this.setState({value: newVal});
    props.setImageCount(newVal);
    
};

  return (
    <div className='settings'>
      <p>difficulty slider</p>
      <p>{props.imageCount} images</p>
      <RangeStepInput
        min={4} max={18}
        value={props.imageCount} 
        onChange={onChange.bind(this)}
      />
    </div>
  )
}

export default Slider;