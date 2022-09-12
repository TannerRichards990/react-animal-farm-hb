export default function Animal(animal) {
  return <>
    <div>
    name: {animal.name}
    type: {animal.type}
    says: {animal.says}
      <img src={`{${process.env.PUBLIC_URL}/animals/${animal.type}.svg`} />
    </div>
  
  </>;
}
