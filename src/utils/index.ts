export const convertMarkdownToHtml = (markdown: string): string => {
    // Simple Markdown to HTML conversion logic
    const html = markdown
        .replace(/###### (.*)/g, '<h6>$1</h6>')
        .replace(/##### (.*)/g, '<h5>$1</h5>')
        .replace(/#### (.*)/g, '<h4>$1</h4>')
        .replace(/### (.*)/g, '<h3>$1</h3>')
        .replace(/## (.*)/g, '<h2>$1</h2>')
        .replace(/# (.*)/g, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*)\*/g, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" />')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
        .replace(/\n/g, '<br/>');
    return html;
};

export const saveNoteToLocalStorage = (key: string, note: string): void => {
    localStorage.setItem(key, note);
};

export const loadNoteFromLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key);
};