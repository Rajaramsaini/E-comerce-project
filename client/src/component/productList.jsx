
import { Box } from "@mui/material";
import CardComponent from "./cardComp";

const ProductList = ({ productsData }) => {
  return (
    <>
      <Box
        m={2}
        pt={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "15px",
          margin:"2px"
        }}
      >
        {productsData &&
          productsData.map((product) => <CardComponent product={product} />)}
      </Box>
    </>
  );
};

export default ProductList; 