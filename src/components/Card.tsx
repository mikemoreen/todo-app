import { CardType } from '../App'
interface CardProps {
    card?: CardType
}
const Card: React.FC<CardProps> = ({card} : CardProps) =>{
    const {id, content} = card as CardType
    return (
    <div className='bg-neutral-300 h-48 w-48 py-5 mr-4 mb-8'>{content}</div>
    )
}
export default Card;