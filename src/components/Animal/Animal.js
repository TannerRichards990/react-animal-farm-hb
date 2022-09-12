import './Animal.css';


export default function Animal(props) {
  return <>
    <div className="animal" style={{ top: props.animal.top, left: props.animal.left }}>
      <p className="name">{props.animal.name}</p>
      {props.animal.says}
      <img src={`${process.env.PUBLIC_URL}/animals/${props.animal.type}.svg`} />
    </div>
  
  </>;
}
