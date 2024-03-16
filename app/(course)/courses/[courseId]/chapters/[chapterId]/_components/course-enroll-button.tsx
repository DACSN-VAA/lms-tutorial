"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButon = ({
  price,
  courseId,
}: CourseEnrollButonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/courses/${courseId}/checkout`);
      window.location.assign(response.data.url);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto border border-gray-800 text-gray-800 hover:bg-black hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white disabled:opacity-50"
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};
