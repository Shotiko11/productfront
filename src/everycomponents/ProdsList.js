import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Container } from "./Container";
import { CardStyles } from "../componentstyles/CardStyles";
import HeaderInt from "../componentstyles/HeaderShape";
import { Prods } from "./Prods";
import { Link } from "react-router-dom";

const ProdsList = () => {
  const [products, setProducts] = useState([]);
  const [picked, setPicked] = useState([]);

  const dataFetch = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setProducts(data);
  };

  function handleChange(id, check) {
    if (check) {
      setPicked([...picked, id]);
    } else {
      const ids = picked.filter((e) => e !== id);
      setPicked([...ids]);
    }
  }

  function handleClick() {
    const resp = deleteProducts();
    if (resp) {
      let arr = [...products];
      picked.forEach((id) => {
        arr = arr.filter((product) => product.SKU !== id);
      });
      setProducts([...arr]);
      setPicked([]);
    }
  }

  async function deleteProducts() {
    await fetch("https://scandiphpproject.000webhostapp.com/product/delete", {
      method: "POST",
      body: JSON.stringify(picked),
    });
  }

  useEffect(() => {
    dataFetch("https://scandiphpproject.000webhostapp.com/product");
  }, []);

  return (
    <div>
      <Header title={"Products List"}>
        <Link style={HeaderInt.btn} to={"/add-product"}>
          ADD
        </Link>
        <button
          id="delete-product-btn"
          style={HeaderInt.btn}
          onClick={() => handleClick()}
        >
          MASS DELETE
        </button>
      </Header>
      <Container>
        <div style={CardStyles.mainContainer}>
          {products.map((prod) => {
            return (
              <Prods
                key={prod.SKU}
                handleChange={handleChange}
                product={prod}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProdsList;
