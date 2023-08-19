import { Badge, Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ item, index }) => {
  const select = useSelector((state) => state.commonReducers.cart);
  // console.log("select", select);

  const dispatch = useDispatch();
  const handleRemove = (item) => {
    const type = "REMOVE";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <Grid container spacing={2} textAlign={"center"} sx={{ marginTop: 14 }}>
      {select.map((item) => (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <h3>{item.category.toUpperCase()}</h3>
              <Badge badgeContent={`Rs. ${item.price}`} color="error">
                <img src={item.image} alt="" height={250} width={200} />
              </Badge>
              <h5>{item.description}</h5>
              <Rating value={item.rating.rate} />
              <br />
              <Button sx={{ margin: "5px" }} variant="contained">
                buy
              </Button>
              <Button
                onClick={() => handleRemove(item, index)}
                variant="contained"
              >
                Remove to cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
