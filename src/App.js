import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import ImagesLisboa from './components/ImagesLisboa';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <FirstComponent/>
      <AnotherComponent />
      <ImagesLisboa />
      <Hooks />
      <List />
      <RenderCond x={6} y={10}/>
      <Fragment />
      <Container> 
          <h1>Este é filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
