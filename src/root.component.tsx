export default function Root(props) {
  console.log('Root props:', props) 
  return <section>{props.name} is mounted!</section>;
}
