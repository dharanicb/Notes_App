// Write your code here
import {BoxContainer, TitleName, TitleDescription} from './styledComponents'

const NoteItem = props => {
  const {addListItem} = props
  const {title, description} = addListItem
  return (
    <BoxContainer>
      <TitleName>{title}</TitleName>
      <TitleDescription>{description}</TitleDescription>
    </BoxContainer>
  )
}
export default NoteItem
