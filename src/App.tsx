import React, {useState} from 'react';

const testCard = {
  id:1,
  content: 'Hello'
}
type Card = {
  id: number,
  content: string
}
function App() {
  // const cardsArray: Card[] = []
  // const [cards, setCards] = useState(cardsArray);
  const [cards, setCards] = useState<Card[]>([]);
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
      <div className="flex items-center justify-center w-[70rem] space-x-4 mt-6 h-auto flex-wrap">
        <div className='bg-neutral-300 h-48 w-48 py-5'>1</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>2</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>3</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>1</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>2</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>3</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>1</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>2</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>3</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>1</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>2</div>
        <div className='bg-neutral-300 h-48 w-48 py-5'>3</div>
      </div>
    </div>
  );
}

export default App;
