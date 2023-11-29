import React from 'react';

const NoteItem = ({ title, createdAt, body }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-1">Created at: {createdAt}</p>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default NoteItem;