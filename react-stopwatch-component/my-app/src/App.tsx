import { Stopwatch } from './Stopwatch';
import { StopwatchAlt } from './StopwatchAlt';

const useAlt = false;

function App() {
  return (
    <div className="flex justify-center items-center h-screen text-black">
      {useAlt ? <StopwatchAlt /> : <Stopwatch />}
    </div>
  );
}

export default App;
