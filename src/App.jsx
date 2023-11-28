import React from 'react';
import NoteItem from '../components/NoteItem';
import './App.css';


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
        <NoteItem
          key={index}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
        />
      ))}
    </div>
  );
};

export default App;