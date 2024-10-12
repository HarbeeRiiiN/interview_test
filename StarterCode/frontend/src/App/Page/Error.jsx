import React from 'react';

function Error({ statusCode }) {
  switch (statusCode) {
    case 0:
      return <h1 className="error">Status code: {statusCode}, Please restart the server and refresh this page.</h1>;
    case 404:
      return <h1 className="error">Status code: {statusCode}, Page not found.</h1>;
    default:
      return <div>Status code: {statusCode}, Unknow Error happened.</div>;
  }
}

export default Error;
