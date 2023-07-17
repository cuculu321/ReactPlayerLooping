import React from 'react';
import ReactPlayer from 'react-player'

function App() {
  const [loopCount, setLoopCount] = React.useState(0)
  const [duration, setDuration] = React.useState(0)

  function handlerOnProgress(state) {
    if (state.playedSeconds > duration - 1.5) {
      setLoopCount(loopCount + 1)
    }
  }

  return (
    <div>
      <ReactPlayer
        url='https://samplelib.com/lib/preview/mp4/sample-5s.mp4' 
        controls={true}
        playing={true}
        loop={true}
        onEnded={() => console.log('onEnded')} //悲しいかな発火しない子
        onDuration={setDuration}
        onProgress={handlerOnProgress}
        />
        <h3>
          Loop count: {loopCount}
        </h3>
      </div>
  );
}

export default App;
