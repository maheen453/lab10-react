import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Web Page</h1>
        <p>
          This page was created using React. Here, I explain how I installed React,
          how I built the page, and the challenges I faced.
        </p>
        <h2>Installation</h2>
        <p>React was installed using <code>npx create-react-app</code>.</p>
        <h2>How I Built This Page</h2>
        <p>I used React's component-based structure to create the content.</p>
        <h2>Challenges and Solutions</h2>
        <ul>
          <li><strong>Challenge 1:</strong> Understanding JSX syntax.</li>
          <li><strong>Solution:</strong> Referenced React documentation and tutorials.</li>
          <li><strong>Challenge 2:</strong> Ensuring compatibility with browsers.</li>
          <li><strong>Solution:</strong> Used React's built-in features for cross-browser compatibility.</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
