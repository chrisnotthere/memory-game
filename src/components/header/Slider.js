import React from "react";
import {RangeStepInput} from 'react-range-step-input';

const Slider = (props) => {

  const onChange = (e) => {
    const newVal = e.target.value;
    props.setImageCount(newVal);
};

  return (
    <div className='settings'>
      <p>show more/less</p>
      <p>{props.imageCount} images</p>
      <RangeStepInput
        min={2} max={12}
        value={props.imageCount} 
        onChange={onChange.bind(this)}
      />
    </div>
  )
}

export default Slider;
