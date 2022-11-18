import React, {useState} from 'react';


// Components
import Cards from './components/Cards';

const testCard = {
  id:1,
  content: 'Hello'
}
export type CardType = {
  id: number,
  content: string
}
const App:React.FC = () =>{
  // const cardsArray: Card[] = []
  // const [cards, setCards] = useState(cardsArray);
  const [cards, setCards] = useState<CardType[]>([]);
  return (
    <div className="flex flex-col items-center justify-center">
    
      <div className="flex flex-col  items-center justify-center ">
        <div className='mb-4'>
          <h1>Todo List</h1>
        </div>
        <div>
          <button className='py-2 px-2 border' onClick={()=> setCards([...cards, testCard])}>
            Add Task 
          </button>
        </div>
      </div>
      <div className="relative flex py-5 items-center  justify-center w-[70rem]">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Tasks</span>
          <div className="flex-grow border-t border-gray-400"></div>
      </div>
      {/*Список карточек*/}
      <Cards cards = {cards}/>

    </div>
  );
}

export default App;
