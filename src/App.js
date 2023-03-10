import './App.css';
import { LeftMenu } from './component/LeftMenu';
import { MainMenu } from './component/MainMenu';
import { RightMenu } from './component/RightMenu';

function App() {
  return (
    <div className="App">
    <LeftMenu />
    <RightMenu/>
    <MainMenu/>
    </div>
  );
}

export default App;
