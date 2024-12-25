// filepath: /web-notes-project/src/pages/Home.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ReactMarkdown from 'react-markdown';
import { Box } from '@mui/material';

const Home: React.FC = () => {
    const [content, setContent] = useState<string>('');

    const handleSelect = async (file: string) => {
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Cannot fetch ${file}`);
            }
            const text = await response.text();
            setContent(text);
        } catch (error) {
            console.error(error);
            setContent(`Error loading ${file}`);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onSelect={handleSelect} />
            <Box sx={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </Box>
        </div>
    );
};

export default Home;