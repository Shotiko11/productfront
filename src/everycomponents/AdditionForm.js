import React from "react";
import { AdditionStyles } from "../componentstyles/AdditionStyles";

function AdditionIn(props) {
  return (
    <form
      id="product_form"
      style={AdditionStyles.body}
      onSubmit={() => props.handleSubmit}
    >
      {/* SKU */}
      <input
        style={AdditionStyles.inputStyles}
        type="text"
        id="sku"
        name="SKU"
        onChange={(event) => {
          props.handleChange(event);
        }}
        placeholder="unic id"
      />
      {props.errors.price && (
        <label>Sku is useless or have been used before</label>
      )}
      {/* Product NAME  */}
      <input
        style={AdditionStyles.inputStyles}
        type="text"
        id="name"
        name="name"
        onChange={(event) => props.handleChange(event)}
      />
      {props.errors.name && <label>Please submit the Name</label>}
      {/* product PRICE $ */}
      <input
        style={AdditionStyles.inputStyles}
        type="number"
        id="price"
        name="price"
        onChange={(event) => props.handleChange(event)}
        placeholder="price in USD($)"
      />
      {props.errors.price && <label>Please submit the price</label>}
      {/* options of productType */}
      <select
        style={AdditionStyles.select}
        id="productType"
        name="productType"
        onChange={(event) => props.handleChange(event)}
      >
        <option value={""}>Choose your product</option>
        <option value="DVD">DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
      {/* if "DVD" is chosen */}
      {props.productType === "DVD" ? (
        <div>
          <input
            style={AdditionStyles.inputStyles}
            type="number"
            id="size"
            placeholder="Product size MG"
            name="size"
            onChange={(event) => props.handleChange(event)}
          />
          {props.size && <label>Please submit the size</label>}
        </div>
      ) : props.productType === "Book" ? (
        <div>
          <input
            style={AdditionStyles.inputStyles}
            type="number"
            id="weight"
            placeholder="weight in KG"
            name="weight"
            onChange={(event) => props.handleChange(event)}
          />
          {props.errors.weight && <label>Please submit product weight</label>}
        </div>
      ) : props.productType === "Furniture" ? (
        <div>
          <div id="Furniture">
            <input
              style={AdditionStyles.inputStyles}
              type="number"
              id="height"
              placeholder="Product height in CM"
              name="height"
              onChange={(event) => props.handleChange(event)}
            />
            {props.errors.height && <label>Please submit product height</label>}

            <input
              style={AdditionStyles.inputStyles}
              type="number"
              id="width"
              placeholder="Product width in CM"
              name="width"
              onChange={(event) => props.handleChange(event)}
            />
            {props.errors.width && <label>Please submit product width</label>}

            <input
              style={AdditionStyles.inputStyles}
              type="number"
              id="length"
              placeholder="Product length in CM"
              name="length"
              onChange={(event) => props.handleChange(event)}
            />
            {props.errors.length && <label>Please submit product length</label>}
          </div>
          <h1>Please submit dimensions</h1>
        </div>
      ) : null}
    </form>
  );
}

export default AdditionIn;
