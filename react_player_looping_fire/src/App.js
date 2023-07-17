import React from 'react';
import ReactPlayer from 'react-player'

function App() {

  const [loopCount, setLoopCount] = React.useState(0)

  function onEned() {
    console.log('onEnded callback')
  }

  return (
    <div>
      <ReactPlayer
        url='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' 
        playing={true}
        loop={false}
        onEnded={onEned}
        />
        <h3>
          Loop count: {loopCount}
        </h3>
      </div>
  );
}

export default App;
