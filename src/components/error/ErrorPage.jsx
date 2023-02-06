import React from "react";
import styled from "styled-components";
import "./ErrorPage.scss";
const ATag = styled.a`
  &:hover {
    color: blue;
  }
`;
const ErrorPage = ({ statusCode, message, advice }) => {
  return (
    <div className="error__wrapper">
      <h1>Something went wrong.</h1>
      <p className="zoom-area">
        Error code:<b> {statusCode || 500}</b>
        <br />
        Error message:<b> {message || "Internal server error"}</b>
        <br />
        <b>
          {" "}
          {advice || 'Click on "Back to home" button'}, or report for us by
          "Report us" button
        </b>
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <a href="/" className="more-link">
          Back to home
        </a>
        <a
          target="_blank"
          href="/error/report-except-error"
          className="more-link"
        >
          Report us
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
