import React from "react";

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="mt-12 gap-5 flex flex-col justify-center items-center pb-16">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
    </div>
  );
};

export default EmptyState;
