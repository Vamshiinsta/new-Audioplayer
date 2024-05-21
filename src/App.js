import './App.css';
import { useEffect } from 'react'; // Import useEffect hook to run code after component mounts

function App() {
  useEffect(() => {
    // Code to include external script
    const script = document.createElement('script');
    script.type = 'module';
    script.crossOrigin = true;
    script.src = 'https://instaread.co/js/v2/dev/instaread.testplayer.js';
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once after component mounts

  return (
    <div className="App">
                      <h1
                  class="ClampedBox-sc-1pg0sor-0 Heading__H1-i0amlx-0 fMjDgL FUgTU c-articleHeader__headline c-articleHeader__headline"
                >
                  US Navy preps hypersonic weapon test this spring, with Army watching
                </h1>
      <div className='Audio-player'>
          <instaread-player publication="defensenews"></instaread-player>
        </div>
    </div>
  );
}

export default App;
