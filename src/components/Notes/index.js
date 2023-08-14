import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
// Write your code here
import {
  Container,
  HeadLine,
  TestContainer,
  MainContainer,
  ReadInput,
  ReadTextArea,
  TextRight,
  ReadButton,
  ContainerItem,
} from './styledComponents'
import {container} from 'webpack'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [addList, setAddList] = useState([])
  const [checkList, setCheckList] = useState(true)

  const onAddItem = () => {
    const addNewList = {
      id: uuidv4(),
      title,
      description,
    }
    setCheckList(false)
    setAddList(prevState => [...prevState, addNewList])
    setTitle('')
    setDescription('')
  }

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeDescription = event => {
    setDescription(event.target.value)
  }
  return (
    <Container>
      <HeadLine>Notes</HeadLine>
      <TestContainer>
        <MainContainer onSubmit={onAddItem}>
          <ReadInput type="text" placeholder="Title" onChange={onChangeTitle} />
          <ReadTextArea
            type="text"
            placeholder="Take a Note..."
            rows="6"
            onChange={onChangeDescription}
          />
          <TextRight>
            <ReadButton type="submit">Add</ReadButton>
          </TextRight>
        </MainContainer>
        {checkList ? (
          <>
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
              height="100px"
            />
            <h1>No Notes Yet</h1>
            <p>Notes you add will appear here</p>
          </>
        ) : (
          <ContainerItem>
            {addList.map(eachItem => (
              <NoteItem key={eachItem.id} addListItem={eachItem} />
            ))}
          </ContainerItem>
        )}
      </TestContainer>
    </Container>
  )
}
export default Notes
