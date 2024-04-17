
import './App.css'
import { InputWithDisplay } from './components/InputWithDisplay'
import { Header } from './components/Header'
import { HeaderText } from './components/HeaderText'
import { ButtonWithText } from './components/ButtonWithText'
import { Books } from './components/Books'
import { Alert, VariantType } from './components/Alert'
import { Messages } from './components/messages/Messages'

const favouriteBooks = [
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" },
  { name: "Redux in depth" },
];

function App() {

  return (
    <>
      <Messages variant='info'>My message</Messages>
      <Messages variant='error' outlined>My message 2</Messages>
      <Messages variant='success' elevated>My message 3</Messages>
      <Messages variant='warning' outlined elevated>My message 4</Messages>
      
      {/* <Alert variant={VariantType.INFO}>My message</Alert>
      <Alert variant='error'>My second message</Alert>
      <Alert variant='success'>My third message</Alert>
      <Alert variant='warning'>My forth message</Alert> */}
      
      {/* <Books books ={favouriteBooks}/> */}
      {/* <Header /> */}
      {/* <InputWithDisplay /> */}
      {/* <HeaderText text="React + Vite">
        headerText children
        <p>iron ADDICTS child</p>
        </HeaderText> */}
      {/* <ButtonWithText /> */}
    </>
  )
}

export default App
