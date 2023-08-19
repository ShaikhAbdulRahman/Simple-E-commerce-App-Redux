import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Productitem from "./Productitem";

const Product = () => {
  const [data, setData] = useState([]);
  const searchTerm = useSelector((state) => state.commonReducers.searchTerm);

  // const recieveData = useSelector((state)=> state.commonReducers.product);
  // console.log("recieveData",recieveData);
  const dispatch = useDispatch();

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    const type = "ADD-PRODUCT";
    const payload = result.data;
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={2} sx={{ marginTop: 14 }}>
      {data
        .filter((item) =>
          item.category.toUpperCase().includes(searchTerm.toUpperCase())
        )
        .map((item) => {
          return <Productitem key={item.id} item={item} />;
        })}
    </Grid>
  );
};

export default Product;
