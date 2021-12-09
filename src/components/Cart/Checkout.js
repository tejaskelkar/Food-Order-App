import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from './Checkout.module.css';


const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim() !== 5;

const Checkout = (props) => {

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true
  });
  
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredSteetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredSteetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid
    });

    const formIsValid = enteredNameIsValid && enteredSteetIsValid && enteredPostalIsValid && enteredCityIsValid;
    
    if (!formIsValid) {
      return;
    }

    //Submit Card Data
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Please enter valid name!</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter valid street!</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputsValidity.postal && <p>Please enter valid postal code!</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Please enter valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onHideCart}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;