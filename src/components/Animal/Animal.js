import './Animal.css';


export default function Animal(props) {
  return <>
    <div className="animal" style={{ top: props.animal.top, left: props.animal.left }}>
      {props.animal.name}
      {props.animal.type}
      {props.animal.says}
      <img src={`${process.env.PUBLIC_URL}/animals/${props.animal.type}.svg`} />
    </div>
  
  </>;
}
