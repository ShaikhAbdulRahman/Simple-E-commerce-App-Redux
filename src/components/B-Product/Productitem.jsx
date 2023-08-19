import { Badge, Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const Productitem = ({ item }) => {
  const dispatch = useDispatch();
  // console.log("item",item);
  const handleCart = (item) => {
    // console.log("cart",item); // handleCart ka pura funtion likhe bad console karke check kare
    const type = "ADD-TO-CART";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Grid item xs={3} textAlign={"center"}>
      <Card>
        <CardContent>
          <h3>{item.category.toUpperCase()}</h3>
          <Badge badgeContent={`Rs. ${item.price}`} color="error">
            <img src={item.image} alt="" height={250} width={200} />
          </Badge>
          <h5>{item.description.substr(0, 30) + "..."}</h5>
          <Rating value={item.rating.rate} />
          <br />
          <Button
            onClick={() => handleCart(item)}
            sx={{ margin: "5px" }}
            variant="contained"
          >
            ADd to cart
          </Button>
          <Button variant="contained" color="error">BuY</Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Productitem;
