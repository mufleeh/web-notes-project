// filepath: /web-notes-project/src/components/Tabs.tsx
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TabPanel from './TabPanel';
import ReactMarkdown from 'react-markdown';

const SimpleTabs: React.FC = () => {
    const [value, setValue] = useState(0);
    const [content, setContent] = useState<string>('');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        const fetchMarkdown = async (file: string) => {
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

        switch (value) {
            case 0:
                fetchMarkdown('/notes/overview.md');
                break;
            case 1:
                fetchMarkdown('/notes/notes.md');
                break;
            case 2:
                fetchMarkdown('/notes/code-snippets.md');
                break;
            default:
                break;
        }
    }, [value]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview" />
                    <Tab label="Notes" />
                    <Tab label="Code Snippets" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ReactMarkdown>{content}</ReactMarkdown>
            </TabPanel>
        </Box>
    );
};

export default SimpleTabs;