import { ColorProvider } from './context/ColorContext.jsx';
import ColorSelector from './components/ColorSelector.jsx';
import NoteBoard from './components/NoteBoard.jsx';
import './App.css';

function App() {
  return (
    <ColorProvider>
      <div className="app-container">
        <header>
          <h1>NOTAS</h1>
          <ColorSelector />
        </header>

        <main>
          <NoteBoard />
        </main>
      </div>
    </ColorProvider>
  )
}

export default App
