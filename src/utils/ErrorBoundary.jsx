import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ErrorPage from "../components/error/ErrorPage";
import { ErrorResponse } from "./ErrorResponse";
const ATag = styled.a`
  &:hover {
    transform: translateX(15px);
    color: blue;
    transition: 0.2s all linear;
  }
`;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined, info: undefined };
  }
  static getDerivedStateFromError(error) {
    console.log("jump");
    console.log(error);

    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("jump");
    // Display fallback UI
    this.setState({ hasError: true, error, info });
    // You can also log the error to an error reporting service
    console.log(error.statusCode);
  }

  render() {
    const { error: systemError } = this.state;
    const error = new ErrorResponse(
      systemError?.message,
      systemError?.statusCode
    );
    return this.state.hasError ? (
      <ErrorPage statusCode={error.statusCode} message={error.message} />
    ) : (
      this.props.children
    );
  }
}
export default ErrorBoundary;
