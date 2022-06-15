import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function OrderForm() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      <div>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          marginLeft={"120px"}>
          Order Form
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Last Name"
        />
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
          }}>
          <TextField fullWidth label="@Email" id="@" />
        </Box>

        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
          }}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Country"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Address"
          />
        </Box>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          marginLeft={"120px"}
          marginTop={"50px"}>
          Payment
        </Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Payment</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Credit card"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Debit card"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="PayPal"
            />
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
          }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your currency">
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <TextField
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Credit card number"
          variant="outlined"
        />
        <Box
          sx={{
            width: 1000,
            maxWidth: "100%",
          }}>
          <TextField
            id="outlined-basic"
            label="Expiration"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="CVV" variant="outlined" />
        </Box>
        <Box marginLeft={"170px"} marginTop={"30px"}>
          <Button variant="contained">Submit</Button>
        </Box>
      </div>
    </Box>
  );
}
