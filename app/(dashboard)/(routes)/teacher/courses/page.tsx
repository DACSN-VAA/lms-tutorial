import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button className="border-2 border-gray-800 text-white bg-gray-700 hover:bg-gray-900 px-4 py-2 rounded">
          New Course
        </Button>
      </Link>
    </div>
  );
};
export default CoursesPage;
