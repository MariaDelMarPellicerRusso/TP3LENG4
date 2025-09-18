import FileUploader from './components/FileUploader';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sube tu imagen</h1>
      <FileUploader />
    </div>
  );
}

export default App;

