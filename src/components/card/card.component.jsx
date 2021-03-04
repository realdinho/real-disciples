import './card.styles.css'

const Card = ({ disciple }) => {
  return (
    <div className='card-containter'>
      <img src={`https://robohash.org/${disciple.id}?set=set4&size=180x180`} alt="disciple"/>
      <h3 key={disciple.id}>{disciple.name}</h3>
      <p>{disciple.email}</p>
    </div>
  )
}

export default Card
