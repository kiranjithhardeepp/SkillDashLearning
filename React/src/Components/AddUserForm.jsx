import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import profilePic from "../assets/profilepic.jpg";
import backArrow from "../assets/backArrow.png";
const AddUserForm = () => {
  return (
    <Container className="add-user py-4 px-3">
      <Form>
        <div className="user-details-container align-items-center mb-4">
          <Row className="mb-3">
            <Col xs={1}>
              <img src={backArrow} alt="back arrow" />
            </Col>
            <Col className="text-end">
              <div className="fw-bold" style={{ color: " #659AFF" }}>
                Arsha S
              </div>
              <div>Developer</div>
            </Col>
            <Col xs="auto">
              <img
                src={profilePic}
                alt="User"
                className="rounded-circle"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </div>
        <div className="user-details-container1 mb-4">
          <Row className="mb-3">
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" defaultValue="Arsha S" readOnly />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col>
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Col>
          </Row>
        </div>

        <div className="user-details-container2 mb-4">
          <Row className="g-3">
            <Col>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col>
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col>
              <Form.Label>City/State</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
        </div>

        <div className="user-details-container3 mb-4">
          <Row className="g-3">
            <Col>
              <Form.Label>Role Name</Form.Label>
              <Form.Select className="user-details-container3-form-select">
                <option>Admin</option>
                <option>Super Admin</option>
                <option>User</option>
                <option>OT User</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Department Name</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col>
              <Form.Label>Team Name</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
        </div>

        <div className="user-details-container4 mb-4">
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>User Group</Form.Label>
              <div className="d-flex align-items-center gap-2">
                <Form.Control type="text" />
                <button type="button" className="circular-icon-btn">
                  <IoMdAddCircleOutline className="circular-icon-btn-icon" />
                </button>
              </div>
            </Col>
            <Col md={6}>
              <Form.Label>Cas Name</Form.Label>
              <Form.Control type="text" defaultValue="Arsha S" readOnly />
            </Col>
          </Row>
        </div>

        <Row className="justify-content-end">
          <Col xs="auto">
            <Button className="add-user-btn m-2">Cancel</Button>
            <Button type="submit" className="add-user-btn">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddUserForm;
