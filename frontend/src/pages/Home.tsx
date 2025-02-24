import { Col, Container, Row } from "react-bootstrap";
import HeroImg from "@/assets/png/HeroImg.png";

const Home = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="fs-2 lh-base mb-3">Students Management System</h1>
            <h2 className="fs-5 lh-base mb-3">
              A powerful and intuitive platform for managing student records
              efficiently!
            </h2>
            <p className="fs-6 mb-0">
              Our system allows administrators and educators to seamlessly add,
              update, and track student information in real-time. With a
              user-friendly interface and built-in analytics, managing student
              data has never been easier. Simplify academic record-keeping with
              our modern solution!
            </p>
          </Col>
          <Col lg={6} className="d-flex">
            <img
              src={HeroImg}
              alt="Hero Image"
              style={{ maxWidth: "80%" }}
              className="mx-auto"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
