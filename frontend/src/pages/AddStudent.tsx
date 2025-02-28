import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const dispatch = useAppDispatch();
  const {
    add: { loading, error },
  } = useAppSelector((store) => store.students);
  const navigate = useNavigate();
  return <div>AddStudent</div>;
};

export default AddStudent;
