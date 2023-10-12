import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(text);
  }

  return (
    <>
      <CustomButton text="I" color="red" onCustomClick={handleCustomClick} />
      <CustomButton
        text="know"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="React"
        color="blue"
        onCustomClick={handleCustomClick}
      />
    </>
  );
}

export default App;
