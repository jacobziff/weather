import TopArea from './Components/TopArea';
import MiddleArea from './Components/MiddleArea';
import BottomArea from './Components/BottomArea';
import './index.css';
import './tailwind.css';

function App() {
  return (
    <div className="flex flex-col gap-y-8 p-4">
      <TopArea/>
      <MiddleArea/>
      <BottomArea/>
    </div>
  );
}

export default App;
