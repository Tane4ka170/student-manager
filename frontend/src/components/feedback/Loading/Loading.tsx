import { Spinner, Alert } from "react-bootstrap";
import { TLoading } from "@/types";

interface LoadingProps {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
}

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (status === "failed") {
    return <Alert variant="danger">{error}</Alert>;
  }

  return children;
};

export default Loading;
