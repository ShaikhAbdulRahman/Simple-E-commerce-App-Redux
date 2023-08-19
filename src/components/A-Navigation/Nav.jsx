import {
  Badge,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useDispatch, useSelector } from "react-redux";

const Nav = ({ setSearch, search }) => {
  const cart = useSelector((state) => state.commonReducers.cart);

  const dispatch = useDispatch();
  const handleSearch = () => {
    const type = "UPDATE-SEARCH";
    const payload = search;
    const action = { type, payload };
    dispatch(action);
  };

  return (
    <Card sx={{ justifyContent: "center", alignItems: "center" }} className="header">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h2>Shopping Cart</h2>
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              variant="outlined"
              label="Search Here..."
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={handleSearch}
              variant="contained"
              fullWidth
              sx={{ height: 55 }}
              >
              Search...
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Link to="/card">
              <Badge
                badgeContent={cart.length}
                color="success"
                sx={{ marginTop: 1.5, marginLeft: 3 }}>
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link to="/">
              <IconButton color="success" aria-valuemax={2}>
                <ArrowBackOutlinedIcon
                  fontSize="medium"
                  sx={{ margin: 1, marginLeft: 0 }}
                />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Nav;
