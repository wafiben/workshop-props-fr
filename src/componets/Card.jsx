import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "react-rating-stars-component";

function CardUser({ name, email, score, showScore }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>name :{name}</Card.Title>
        <Card.Text>email :{email}</Card.Text>
        <Button variant="primary" onClick={() => showScore(score)}>
          Show score
        </Button>
      </Card.Body>
      {score > 7 && <Rating count={1} size={24} color="#ffd700" />}
    </Card>
  );
}

export default CardUser;
