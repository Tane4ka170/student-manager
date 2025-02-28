import { Heading } from "@/components/shared";
import StudentsList from "@/components/studentsManager/StudentsList/StudentsList";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getStudents, studentsCleanUP } from "@/store/students/studentsSlice";
import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";

const GetStudents = () => {
  const dispatch = useAppDispatch();
  const {
    get: { loading, error },
    records,
    message,
  } = useAppSelector((state) => state.students);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const promise = dispatch(getStudents());
    return () => {
      dispatch(studentsCleanUP());
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const timeId = setTimeout(() => setShow(false), 3000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <section className="py-4">
      <Container>
        <Heading title="Students List" />
        {message && message === "added" && (
          <Alert variant="success" show={show}>
            Student Successfully Added
          </Alert>
        )}
        {message && message === "edited" && (
          <Alert variant="success" show={show}>
            Student Successfully Updated
          </Alert>
        )}
        {message && message === "already_exist" && (
          <Alert variant="danger" show={show}>
            This student is already in the system!
          </Alert>
        )}
        {records.length ? <StudentsList students={records} /> : <p></p>}
      </Container>
    </section>
  );
};

export default GetStudents;
