import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      This page doesn&apos;t exist.
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFoundPage;
