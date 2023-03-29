import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title  to={`/product/${product.id}`}>
          {product.title}
        </Card.Title>
        <Card.Text></Card.Text>
        <Link to={`/product/${product.id}`}>Click me</Link>
      </Card.Body>
    </Card>
  );
}
export default ProductCard;
