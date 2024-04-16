
import './App.css'
import { InputWithDisplay } from './components/InputWithDisplay'
import { Header } from './components/Header'
import { HeaderText } from './components/HeaderText'
import { ButtonWithText } from './components/ButtonWithText'
import { Books } from './components/Books'
import { Alert } from './components/Alert'

const favouriteBooks = [
  { name: "JS for beginners" },
  { name: "React basics" },
  { name: "React Router overview" },
  { name: "Redux in depth" },
];

function App() {

  return (
    <>
      <Alert />
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
