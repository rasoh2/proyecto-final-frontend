import { useContext } from "react";
import Context from "../context/context";
import "./Detail.css";
import { Link } from "react-router-dom";

export default function Detail() {
  const { producto, setCart, renderEstrellas } = useContext(Context);

  const handleAdd = (e) => {
    e.preventDefault();

    setCart((prevCart) => {
      const itemsFound = prevCart.find((item) => item.name === producto.name);
      if (itemsFound) {
        return prevCart.map((item) => {
          if (item.name === producto.name) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...prevCart,
          {
            img: producto.img,
            name: producto.name,
            price: producto.discountprice,
            qty: 1,
          },
        ];
      }
    });
  };

  return (
    <div className="container-detail d-flex flex-column">
      <div
        className="card-detail 
       d-flex align-items-center 
        "
      >
        <img src={producto.img} alt={producto.name} className="img-producto me-5  " />

        <div className="">
          <h2 className=" text-capitalize mb-3 ">{producto.name}</h2>
          <p id = "subtitulo">About this product:</p>
          <p className="pe-5">{producto.desc}</p>
          <strong>
            <p>STRAIN HIGHLIGHTS:</p>
          </strong>
          <div className="feelingsSt">
          <img
                src="/img/iconmonstr-thumb-10.svg"
                alt=""
                style={{ width: "15px", height: "15px", marginRight: "10px", fill: "green" }}
              /> 
              <h6>Feelings:</h6>
              <div className="feelingcontainer">
              {producto.feelings}
              </div>
          </div>
          <div className="feelingsSt">
          <img
                src="/img/iconmonstr-thumb-6.svg"
                alt=""
                style={{ width: "15px", height: "15px", marginRight: "10px", fill: "green" }}
              /> 
              <h6>Negatives:</h6>
              <div className="negativecontainer">
              {producto.negatives}
              </div>
          </div>
          <div className="feelingsSt">
          <img
                src="/img/iconmonstr-medical-13.svg"
                alt=""
                style={{ width: "18px", height: "18px", marginRight: "10px", fill: "green" }}
              /> 
              <h6>Helps with:</h6>
              <div className="helpcontainer">
              {producto.helpwith}
              </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="rating">
              <h5>Rating:</h5>
            <p>{renderEstrellas()}{producto.rating}</p>
            </div>
            <div className="precioPost">
              <h6>Starting at</h6>
            <h5 className="textPrice">
              {producto.price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </h5>
            </div>
            <button onClick={handleAdd} className="btn btn-danger me-5">
              <img
                src="/img/cart-plus-svgrepo-com.svg"
                alt=""
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              />
              Añadir
            </button>
          </div>
        </div>
      </div>
      <Link to="/" className="nav-link active">
        <button type="button" className="btn btn-success mt-5">
          Atrás
        </button>
      </Link>
    </div>
  );
}
