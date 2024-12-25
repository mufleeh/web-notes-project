import React, { useState } from 'react';

const NoteEditor: React.FC = () => {
    const [note, setNote] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(event.target.value);
    };

    const handleSaveNote = () => {
        // Logic to save the note in Markdown format
        localStorage.setItem('savedNote', note);
        alert('Note saved!');
    };

    return (
        <div className="note-editor">
            <textarea
                value={note}
                onChange={handleInputChange}
                placeholder="Write your note in Markdown format..."
            />
            <button onClick={handleSaveNote}>Save Note</button>
        </div>
    );
};

export default NoteEditor;