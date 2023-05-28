import React, { useState } from "react";
import AdditionIn from "./AdditionForm";
import { Container } from "./Container";
import HeaderInt from "../componentstyles/HeaderShape";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  //validation of the 'Form'
  const formValidator = (e) => {
    const { targe } = e.target;
    if (targe === "text") {
      textValidator(e.target);
    } else if (targe === "number") {
      numberValidator(e.target);
    }
  };

  //validation of submitted text
  //validation of submitted text
  const textValidator = (e) => {
    const valid = /[a-zA-z]/;
    const newErrors = { ...errors };
    newErrors[e.name] = true;
    if (valid.test(e.value)) {
      newErrors[e.name] = false;
    }
    setErrors(newErrors);
  };

  //validation of submitted number
  const numberValidator = (target) => {
    const valid = /[0-9]/;
    const newErrors = { ...errors };
    newErrors[target.name] = true;
    if (valid.test(target.value) && target.value > 0) {
      newErrors[target.name] = false;
    }
    setErrors(newErrors);
  };

  //process of saving the product
  const saveProduct = async () => {
    const resp = await fetch(
      "https://scandiphpproject.000webhostapp.com/product/add",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    //when product is submitted, go to "/" page
    navigate("/");
  };

  //functions used in previous js file
  const handleChange = (e) => {
    const { value, name } = e.target;
    const obj = { ...data };

    formValidator(e);
    obj[name] = value;
    setData(obj);
  };

  const handleSubmit = () => {
    let isValid = true;
    Object.keys(errors).map((key) => (errors[key] ? (isValid = false) : ""));

    if (isValid != false) {
      saveProduct();
    }
  };
  return (
    <div>
      <header title={"Product Add"}>
        <button style={HeaderInt.btntwo} onClick={() => handleSubmit()}>
          Save It
        </button>
        <Link style={HeaderInt.btn} to={"/"}>
          Cancel Submitting
        </Link>
      </header>
      <Container>
        <AdditionIn
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          productType={data.productType}
          errors={errors}
        />
      </Container>
    </div>
  );
};

export default AddProduct;
