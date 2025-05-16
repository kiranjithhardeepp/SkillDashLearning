import React, { useState } from 'react';
import { Modal, Button, Form, Pagination, Container, Row, Col } from 'react-bootstrap';

const userGroups = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  name: i === 0 ? 'Skilldash' : 'lorem ipsum',
}));

const itemsPerPage = 7;

const UserGroupModal = ({ show, handleClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const totalPages = Math.ceil(userGroups.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = userGroups.slice(startIndex, startIndex + itemsPerPage);

  const handleCheckboxChange = (id) => {
    setSelectedGroups((prev) =>
      prev.includes(id)
        ? prev.filter((groupId) => groupId !== id)
        : [...prev, id]
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>User Group</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentItems.map((group) => (
          <div
            key={group.id}
            className="d-flex justify-content-between align-items-center bg-light p-3 mb-2 rounded"
          >
            <span>{group.name}</span>
            <Form.Check
              type="checkbox"
              checked={selectedGroups.includes(group.id)}
              onChange={() => handleCheckboxChange(group.id)}
            />
          </div>
        ))}

        <Container className="mt-3">
          <Row className="justify-content-between align-items-center">
            <Col xs="auto">
              <Button
                variant="link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt; Previous
              </Button>
            </Col>
            <Col xs="auto">
              <Pagination>
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Col>
            <Col xs="auto">
              <Button
                variant="link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next &gt;
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default UserGroupModal;
