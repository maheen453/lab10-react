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
        <p>React was installed using <code>npx create-react-app my-react-site</code>.</p>
        <h2>How I Built This Page</h2>
        <p>I navigated the directories that were made during the create-react-app command to find App.js and modified it to include this text using simple javascript. Then I added styling in App.css.</p>
        <p>I connected to GitHub by using the repository automatically initialized by React during the create-react-app command and deployed the project directly from that GitHub repository using Netlify.</p>
        <h2>Challenges and Solutions</h2>
        <p><strong>Challenge:</strong> Knowing what commands to use and how to navigate the React project directories.
        <br />
        <strong>Solution:</strong> Referenced React documentation and tutorials.</p>
        <p><strong>Challenge:</strong> I didn’t know how to host the React project after building it.
        <br />
        <strong>Solution:</strong> I researched hosting services, found Netlify, created an account, 
        and followed its simple steps to deploy directly from GitHub.</p>
        <p><strong>Challenge:</strong> After making a change to the code, the project wouldn’t deploy successfully.
        <br />
        <strong>Solution:</strong> I checked the Netlify deployment logs, identified a syntax error in my code, 
        and went back to fix it before re-deploying successfully.</p>
      </header>
    </div>
  );
}

export default App;
