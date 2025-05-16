import React, { useState, useEffect } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Country, State, City } from "country-state-city";
import { IoMdAddCircleOutline } from "react-icons/io";
import axios from "axios";
import userValidationSchema from "../Common/validationSchema";
import profilePic from "../assets/profilepic.jpg";
import backArrow from "../assets/backArrow.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [teams, setTeams] = useState([]);

  const allCountries = Country.getAllCountries();

  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/designation/getDesignations"
        );
        setDesignations(res.data);
      } catch (error) {
        console.error("Error fetching designations:", error);
      }
    };

    const fetchTeams = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/teamDetails/getTeams"
        );
        setTeams(res.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchDesignations();
    fetchTeams();
  }, []);

  const handleCountryChange = (e, setFieldValue) => {
    const countryCode = e.target.value;
    const fetchedStates = State.getStatesOfCountry(countryCode);
    setStates(fetchedStates);
    setCities([]);
    setFieldValue("country", countryCode);
    setFieldValue("state", "");
    setFieldValue("city", "");
  };

  const handleStateChange = (e, selectedCountry, setFieldValue) => {
    const stateCode = e.target.value;
    const fetchedCities = City.getCitiesOfState(selectedCountry, stateCode);
    setCities(fetchedCities);
    setFieldValue("state", stateCode);
    setFieldValue("city", "");
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phone,
      email: values.email,
      address: values.address,
      country: values.country,
      state: values.state,
      city: values.city,
      roleId: 1,
      designationId: values.designation,
      teamId: values.team,
      casUserName: values.casUserName,
      status: true,
      userGroupRequest: [
        {
          userGroupId: 1,
          userGroupName: "Design Team",
          description: "Dev Dummy",
        },
        {
          userGroupId: 2,
          userGroupName: "Development Team",
          description: "Dev Dummy",
        },
      ],
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/addUserDetails",
        payload
      );
      toast.success("User added successfully!");
      resetForm();
    } catch (error) {
      toast.error("Failed to add user.");
      console.error("Error:", error);
    }
  };

  return (
    <Container className="add-user py-4 px-3">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          country: "",
          state: "",
          city: "",
          role: "",
          designation: "",
          team: "",
          userGroup: "",
          casUserName: "",
        }}
        validationSchema={userValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, handleChange }) => (
          <FormikForm>
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
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
              </Row>
            </div>

            {/* Personal Info */}
            <div className="user-details-container1 mb-4">
              <Row className="mb-3">
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Field
                    name="firstName"
                    as={Form.Control}
                    placeholder="Enter First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Field
                    name="lastName"
                    as={Form.Control}
                    placeholder="Enter Last Name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <Form.Label>Phone No.</Form.Label>
                  <Field
                    name="phone"
                    as={Form.Control}
                    placeholder="Enter Phone Number"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Form.Label>Email</Form.Label>
                  <Field
                    name="email"
                    as={Form.Control}
                    placeholder="Enter Email Address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
            </div>

            {/* Address Info */}
            <div className="user-details-container2 mb-4">
              <Row className="g-3">
                <Col>
                  <Form.Label>Address</Form.Label>
                  <Field
                    name="address"
                    as={Form.Control}
                    placeholder="Enter Address"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <Form.Label>Country</Form.Label>
                  <Form.Select
                    value={values.country}
                    onChange={(e) => handleCountryChange(e, setFieldValue)}
                    className="user-details-container3-form-select"
                  >
                    <option value="">Select Country</option>
                    {allCountries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                  </Form.Select>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    value={values.state}
                    onChange={(e) =>
                      handleStateChange(e, values.country, setFieldValue)
                    }
                    disabled={!states.length}
                    className="user-details-container3-form-select"
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </Form.Select>
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    value={values.city}
                    onChange={handleChange}
                    name="city"
                    disabled={!cities.length}
                    className="user-details-container3-form-select"
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </Form.Select>
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
            </div>

            <div className="user-details-container3 mb-4">
              <Row className="g-3">
                <Col>
                  <Form.Label>Cas Name</Form.Label>
                  <Field
                    name="casUserName"
                    as={Form.Control}
                    placeholder="Enter cas name"
                  />
                  <ErrorMessage
                    name="casUserName"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <Form.Label>Designation</Form.Label>
                  <Field
                    as={Form.Select}
                    name="designation"
                    className="user-details-container3-form-select"
                  >
                    <option value="">Select Designation</option>
                    {designations.map((designation) => (
                      <option
                        key={designation.designationId}
                        value={designation.designationId}
                      >
                        {designation.designationName}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="designation"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col>
                  <Form.Label>Team</Form.Label>
                  <Field
                    as={Form.Select}
                    name="team"
                    className="user-details-container3-form-select"
                  >
                    <option value="">Select Team</option>
                    {teams.map((team) => (
                      <option key={team.teamId} value={team.teamId}>
                        {team.teamName}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="team"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
            </div>

            {/* Extra Info */}
            <div className="user-details-container4 mb-4">
              <Row className="g-3">
                <Col>
                  <Form.Label>Role</Form.Label>
                  <Field
                    as={Form.Select}
                    name="role"
                    className="user-details-container3-form-select"
                  >
                    <option value="">Select Role</option>
                    <option>Admin</option>
                    <option>Super Admin</option>
                    <option>User</option>
                    <option>OT User</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>User Group</Form.Label>
                  <div className="d-flex align-items-center gap-2">
                    <Field
                      name="userGroup"
                      as={Form.Control}
                      placeholder="Enter User Group"
                    />
                    <button type="button" className="circular-icon-btn">
                      <IoMdAddCircleOutline className="circular-icon-btn-icon" />
                    </button>
                  </div>
                  <ErrorMessage
                    name="userGroup"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
            </div>

            {/* Submit Buttons */}
            <Row className="justify-content-end">
              <Col xs="auto">
                <Button className="add-user-btn m-2" type="button">
                  Cancel
                </Button>
                <Button type="submit" className="add-user-btn">
                  Submit
                </Button>
              </Col>
            </Row>
          </FormikForm>
        )}
      </Formik>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar />
    </Container>
  );
};

export default AddUserForm;
