import React, {useState, createContext} from 'react';

// Router
import { Route, Routes } from "react-router-dom";
// Components
import Home from './pages/HomePage';
import AddCardForm from './pages/AddCardForm';

interface Ctx {
  value: string[],
  handleValue: (arg: string) => void
}
// export const Context = createContext<string[]>([]);
export const Context = createContext<Ctx>({value:['string'], handleValue: () => []});


const App:React.FC = () =>{
  // const value = 'string';
  // const handleValue = () => {

  // }
  // const test = 'test'
  const [value, setValue] = useState<string[]>([])
  const handleValue = (newString: string) => {
    setValue([...value, newString])
  }
  return (
    <Context.Provider value={{value, handleValue}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_card" element={<AddCardForm/>} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
