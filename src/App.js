import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Balance from "./components/Balance";
import History from "./components/History";

function App() {
  return (
    <div className="App my-5">
      <Container style={{ marginTop: "40px" }}>
        <Row className="justify-content-center">
          <Col
            xl={4}
            lg={4}
            md={6}
            xs={12}
            className="border shadow-lg rounded-4"
          >
            <h1 className="text-center my-4 fs-3">Expenses Tracker</h1>
            <Balance />
            <History />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
