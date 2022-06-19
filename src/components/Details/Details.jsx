import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { productsContext } from "../../contexts/ProductsContext";
import Loader from "../Loader/Loader";
const steps = [
  {
    label: "Register to view products",
    description: `
    Register to view products. You will see a large selection of products.`,
  },
  {
    label: "Choose a product",
    description: "Choose the product you like from a huge range of products.",
  },
  {
    label: "Check out the goods",
    description: `Check out the goods. And in a short time we will deliver it to you in integrity.`,
  },
];

const Details = () => {
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  // console.log(getOneProduct(id));
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Container>
      {oneProduct ? (
        <Box className="details">
          <Box className="info-text">
            <Typography variant="h2">{oneProduct.title}</Typography>
            <p>{oneProduct.description}</p>
            <Typography>Price: ${oneProduct.price}</Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/basket")}>
              Buy now!
            </Button>
            <Box
              style={{ marginLeft: "20px", marginBottom: "20px" }}
              sx={{ maxWidth: 400 }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={
                        index === 2 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }>
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}>
                            {index === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}>
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
          </Box>
          <Box className="img">
            <img src={oneProduct.image} width="100%"></img>
          </Box>
        </Box>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Details;
