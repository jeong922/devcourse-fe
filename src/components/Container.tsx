import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="flex justify-center flex-col items-center bg-indigo-50/70 rounded-lg p-5 mb-4 mr-2 sm:last:mb-0 sm:mb-4">
      {children}
    </div>
  );
}
