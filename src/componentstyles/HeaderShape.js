const HeaderInt = {
  head: {
    width: window.screen,
    height: window.screen,
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 50px 10px 50px",
  },
  pElement: {
    marginTop: 40,
  },

  btntwo: {
    marginTop: "5%",
    marginLeft: "46%",
    color: "white",
    border: "none",
    backgroundColor: "#4CAF50",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition:
      "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    outline: "none",
    ":hover": {
      backgroundColor: "#45a049",
    },
    ":focus": {
      backgroundColor: "#3d8e41",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    ":active": {
      backgroundColor: "#379436",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
      transform: "translateY(1px)",
    },
  },

  btn: {
    marginRight: 20,
    marginLeft: 20,
    color: "white",
    border: "none",
    backgroundColor: "#4CAF50",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition:
      "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    outline: "none",
    ":hover": {
      backgroundColor: "#45a049",
    },
    ":focus": {
      backgroundColor: "#3d8e41",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    ":active": {
      backgroundColor: "#379436",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
      transform: "translateY(1px)",
    },
  },
};

export default HeaderInt;
