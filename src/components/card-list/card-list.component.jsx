import Card from '../card/card.component'
import './card-list.styles.css';

const CardList = ({ disciples }) => {
  return (
    <div className='card-list'>
      {
        disciples.map((d) => (
          <Card disciple={d} />
        ))
      }
    </div>
  )
}

export default CardList
