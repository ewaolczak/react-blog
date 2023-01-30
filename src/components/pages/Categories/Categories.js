import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../redux/categoryRedux';

const Categories = () => {
  const allCategories = useSelector(getCategories);

  return (
    <section>
      <h1>Categories</h1>
      <Row
        xs={1}
        md={1}
        className='mt-2 g-2 justify-content-center align-items-center'>
        {allCategories.map((category) => (
          <Col key={category}>
            <Link to={`/categories/${category}`} className='text-decoration-none'>
              {category}
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Categories;
