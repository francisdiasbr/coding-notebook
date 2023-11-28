import Card from '../../components/Card'
import * as S from './styles'

export default function Home() {
  return (
    <>
      <h1>Coding Notebook</h1>
      <S.Container>
        <Card 
          image='static/images/cards/JS.jpeg'
          href='/code/js'
          marginRight
          title='Tópicos em JavaScript'
        >
          Arrays, Objetos e Funções
        </Card>
        <Card 
          image='static/images/cards/Redux.png'
          href='/code/redux'
          title='Tópicos em Redux'
        >
          Actions, State, Reducer
        </Card>
      </S.Container>
    </>
    )
    
}