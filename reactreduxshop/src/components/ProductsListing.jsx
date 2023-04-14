import React from "react";
import Axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import {setProducts} from '../redux/actions/productActions'
function ProductsListing() {
    const products = useSelector((state) => state);
    const dispatch =useDispatch()

  const getdata = async () => {
    const respons = await Axios.get("https://fakestoreapi.com/products").catch(
      (err) => {
        console.log(err);
      }
    );
    dispatch(setProducts(respons.data));
  };

  useEffect(() => {
    getdata();
  }, []);


 console.log(products,'oooooooooooooooooooooo');

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductsListing;
