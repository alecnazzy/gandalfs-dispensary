import React from "react";

export default function ReviewCard({ review }) {
  return (
    <div className="w-96 p-4 flex items-center">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-row">
        <img
          src={review.avatar}
          alt="Reviewer Avatar"
          className="w-1/3 h-auto object-cover"
        />
        <div className="p-4 flex-1">
          <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
          <p className="text-sm">{review.text}</p>
        </div>
      </div>
    </div>
  );
}
