import React from 'react';

const styles = {
  link: {
    color: '#0db621'
  }
}

export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
      <a style={styles.link} href="https://github.com/jsnicholas/LaborHub">https://github.com/jsnicholas/LaborHub</a>
      </p>
      <p>
      <a style={styles.link} href="https://github.com/jsnicholas/OCDetour">https://github.com/jsnicholas/OCDetour</a>
      </p>
    </div>
  );
}