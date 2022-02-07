// your react component function must be named just like the file
// just a function returning JSX

const FirstComponent = (props) => {
  console.log(props)
  return <h1 style={{ color: props.titleColor }}>{props.title}</h1>
}
// props is ALWAYS an object

// you can export a component as DEFAULT, or NOT AS DEFAULT
export default FirstComponent

// this would be the same component NOT exported as default
// export const FirstComponent = () => <h1>FIRST COMPONENT HERE!</h1>
