import Card from './Card'
import { CardType } from '../App'

interface CardsProps {
    cards?: CardType[]
}

const Cards: React.FC<CardsProps> = ({cards} : CardsProps) => {
    
    return (
    <div className="flex items-center justify-center w-[70rem] space-x-4 mt-6 h-auto flex-wrap">
    {cards?.map((el: CardType)=>{
        return <Card card = {el}/>
    })}
    </div>)
}
export default Cards;