import Player from './Components/Player.jsx';
import TimerContainer from './Components/TimerContainer.jsx';
import Timer from './Components/Timer.jsx';

function App() {
  return (
    <>
      <Player></Player>
      <TimerContainer>
          <Timer title='nivel facil' time='1'></Timer>
          <Timer title='nivel intermedio' time='20'></Timer>
          <Timer title='nivel dificil' time='40'></Timer>
          <Timer title='nivel reto' time='60'></Timer>
          
      </TimerContainer>
    </>
  );
}

export default App;
