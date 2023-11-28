import React from 'react';
import NoteItem from '../components/NoteItem';
import './App.css'


const App = () => {
  // Data catatan hardcode
  const notes = [
    {
      title: 'Catatan 1',
      createdAt: '2023-11-28',
      body: 'Isi catatan 1',
    },
    {
      title: 'Catatan 2',
      createdAt: '2023-11-29',
      body: 'Isi catatan 2',
    },
    {
      title: 'Catatan 3',
      createdAt: '2023-11-30',
      body: 'Isi catatan 3',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Daftar Catatan</h1>
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded p-4 mb-4"
        >
          <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
          <p className="text-gray-500 mb-1">
            Created at: {note.createdAt}
          </p>
          <p className="text-gray-700">{note.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;