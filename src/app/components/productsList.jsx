import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";
import Category from "./ui/category";
import history from "../utils/history";

const ProductsList = ({ products }) => {
    // const history = useHistory();
    const handleClick = (productId) => {
        // history.push(`/products/${productId}`);
        window.scrollTo(0, 0);
        history.push(`/products/${productId}`);
        console.log(history);
    };
    const [sortType, setSortType] = useState(true);
    let sortProducts = products;
    const sortByPrice = () => {
        if (sortType === true) {
            sortProducts = products.sort((a, b) => {
                return a.price - b.price;
            });
            setSortType(!sortType);
        }
        if (sortType === false) {
            sortProducts = products.sort((a, b) => {
                return b.price - a.price;
            });
            setSortType(!sortType);
        }
    };
    return (
        <div>
            <button
                onClick={sortByPrice}
                className="btn btn-secondary btn-sm mb-3"
            >
                Сортировать по цене{" "}
                {sortType ? (
                    <i className="bi bi-sort-up"></i>
                ) : (
                    <i className="bi bi-sort-down"></i>
                )}
            </button>
            <div className="row">
                {sortProducts.map((product) => (
                    <div
                        key={product._id}
                        type="button"
                        onClick={() => handleClick(product._id)}
                        className="row col-lg-5 col-md-12 m-4 mb-2"
                        style={{
                            backgroundColor: "white",
                            borderRadius: "15px",
                            width: "430px"
                        }}
                    >
                        <div className="col-lg-7 col-xl-6 mt-2 ">
                            <img
                                className="img-fluid rounded-3"
                                src={product.image}
                                height="200"
                                alt={product.name}
                            />
                        </div>
                        <div className="col-lg-7 col-xl-6 mt-2 ">
                            <h5>{product.name}</h5>
                            <Category id={product.category} />
                            {/* <p>ID: {product._id}</p> */}
                            <p>
                                Цена: <b>{product.price.toLocaleString()}</b>{" "}
                                рублей
                            </p>
                            {product.quantity > 0 ? (
                                <p>Количество: {product.quantity}</p>
                            ) : (
                                <p>нет в наличии</p>
                            )}
                            {/* <div className="col-md-6 ms-auto pb-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => handleClick(product._id)}
                                >
                                    Карточка товара
                                </button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ProductsList.propTypes = {
    products: PropTypes.array
};

export default ProductsList;