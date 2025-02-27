import { TStudent } from "@/types";

const StudentsList = ({ students }: { students: TStudent[] }) => {
  const studentsList = students.map();
  return <div>StudentsList</div>;
};

export default StudentsList;
