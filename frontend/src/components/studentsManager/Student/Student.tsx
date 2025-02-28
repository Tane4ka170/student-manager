import { useAppDispatch } from "@/store/hooks";
import { deleteStudent } from "@/store/students/studentsSlice";
import { TStudent } from "@/types";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Student = ({ id, firstName, lastName, reference, email }: TStudent) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const deleteStudentHandler = (id: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirm) {
      if (isLoading) return;
      setIsLoading(true);
      dispatch(deleteStudent(id))
        .unwrap()
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{reference}</td>
      <td>{email}</td>
      <td className="d-flex gap-2">
        <Link to={`/students/edit/${id}`}>
          <Button variant="success">Edit</Button>
        </Link>
        <Button variant="danger" onClick={() => deleteStudentHandler(id)}>
          {isLoading ? (
            <>
              <Spinner animation="grow" size="sm" className="me-2" />
              Loading...
            </>
          ) : (
            "Delete"
          )}
        </Button>
      </td>
      <td>{id}</td>
      <td>{id}</td>
      <td>{id}</td>
      <td>{id}</td>
      <td>{id}</td>
    </tr>
  );
};

export default Student;
