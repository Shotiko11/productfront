import React from "react";
import { CardStyles } from "../componentstyles/CardStyles";

export const Prods = (props) => {
  return (
    <div style={CardStyles.card}>
      <input
        style={CardStyles.button}
        className="delete-checkbox"
        id={props.product.SKU}
        type="checkbox"
        onChange={(event) =>
          props.handleChange(props.product.SKU, event.target.checked)
        }
      />
      <div style={CardStyles.outCont}>
        <div style={CardStyles.cardPart}>
          <h2>{props.product.SKU}</h2>
          <p>{props.product.name}</p>
          <p>{props.product.price}</p>
          <p>
            {props.product.type === "dvd"
              ? "size: " + props.product.size
              : props.product.type === "book"
              ? "weight: " + props.product.weight
              : "dimension: " +
                props.product.height +
                "x" +
                props.product.length +
                "x" +
                props.product.width}
          </p>
        </div>
      </div>
    </div>
  );
};
