import React from 'react';

function Footer() {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright: <p></p>
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://parsahajiha.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Parsa Hajiha
        </a>
      </div>
    </footer>
  );
}

export default Footer;