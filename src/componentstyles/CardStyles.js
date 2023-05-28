export const CardStyles = {
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    width: 1000,
    gap: "20px",
    margin: "auto",
  },
  cardPart: {
    margin: "auto 0",
  },
  outCont: {
    display: "flex",
  },
  card: {
    position: "relative",
    width: "250px",
    height: "300px",
    border: "3px solid grey",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "box-shadow 0.3s ease-in-out",
  },
  button: {
    position: "absolute",
    top: "10px",
    left: "10px",
  },
};
