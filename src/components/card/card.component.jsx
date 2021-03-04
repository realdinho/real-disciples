import './card.styles.css'

const Card = ({ disciple }) => {
  return (
    <div className='card-containter' key={disciple.id}>
      <img src={`https://robohash.org/${disciple.id}?set=set4&size=180x180`} alt="disciple"/>
      <h3>{disciple.name}</h3>
      <p>{disciple.email}</p>
    </div>
  )
}

export default Card
