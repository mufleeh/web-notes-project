import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, ListItemButton, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import './styles.css'; // Import the CSS file

const Sidebar: React.FC<{ onSelect: (file: string) => void }> = ({ onSelect }) => {
    const [open, setOpen] = useState<{ [key: string]: boolean }>({});

    const handleClick = (tab: string) => {
        setOpen((prevOpen) => ({ ...prevOpen, [tab]: !prevOpen[tab] }));
    };

    const tabs = [
        {
            label: 'Overview',
            subTabs: [
                { label: 'Project Introduction', file: '/notes/overview.md' },
                { label: 'Goals', file: '/notes/goals.md' },
                { label: 'Features', file: '/notes/features.md' },
            ],
        },
        {
            label: 'Setup',
            subTabs: [
                { label: 'Installation', file: '/notes/installation.md' },
                { label: 'Configuration', file: '/notes/configuration.md' },
                { label: 'Environment Setup', file: '/notes/environment-setup.md' },
            ],
        },
        {
            label: 'Architecture',
            subTabs: [
                { label: 'System Design', file: '/notes/system-design.md' },
                { label: 'Component Diagram', file: '/notes/component-diagram.md' },
                { label: 'Data Flow', file: '/notes/data-flow.md' },
            ],
        },
        {
            label: 'Development',
            subTabs: [
                { label: 'Coding Standards', file: '/notes/coding-standards.md' },
                { label: 'Best Practices', file: '/notes/best-practices.md' },
                { label: 'Code Snippets', file: '/notes/code-snippets.md' },
            ],
        },
        {
            label: 'API Documentation',
            subTabs: [
                { label: 'Endpoints', file: '/notes/endpoints.md' },
                { label: 'Request/Response', file: '/notes/request-response.md' },
                { label: 'Authentication', file: '/notes/authentication.md' },
            ],
        },
        {
            label: 'Testing',
            subTabs: [
                { label: 'Unit Tests', file: '/notes/unit-tests.md' },
                { label: 'Integration Tests', file: '/notes/integration-tests.md' },
                { label: 'Test Cases', file: '/notes/test-cases.md' },
            ],
        },
        {
            label: 'Deployment',
            subTabs: [
                { label: 'Deployment Guide', file: '/notes/deployment-guide.md' },
                { label: 'CI/CD', file: '/notes/ci-cd.md' },
                { label: 'Environments', file: '/notes/environments.md' },
            ],
        },
        {
            label: 'Additional Notes',
            subTabs: [
                { label: 'FAQs', file: '/notes/faqs.md' },
                { label: 'Troubleshooting', file: '/notes/troubleshooting.md' },
                { label: 'References', file: '/notes/references.md' },
            ],
        },
    ];

    return (
        <Drawer variant="permanent" anchor="left">
            <Typography variant="h6" sx={{ padding: '16px' }}>
                Navigation
            </Typography>
            <List>
                {tabs.map((tab) => (
                    <div key={tab.label}>
                        <ListItemButton onClick={() => handleClick(tab.label)}>
                            <ListItemText primary={tab.label} />
                            {open[tab.label] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open[tab.label]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {tab.subTabs.map((subTab) => (
                                    <ListItem
                                        component="li"
                                        key={subTab.label}
                                        onClick={() => onSelect(subTab.file)}
                                    >
                                        <ListItemText primary={subTab.label} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </div>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;