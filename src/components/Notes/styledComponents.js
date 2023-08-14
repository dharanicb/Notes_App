import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  height: 120vh;
`
export const HeadLine = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  color: #4c63b6;
  text-align: center;
  border: none;
`
export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.form`
  margin: 30px;
  box-shadow: 0 4px 8px 0 #d3d9e0, 0 6px 20px 0 #d3d9e0;
  padding: 10px;
  width: 70%;
`
export const ReadInput = styled.input`
  border-width: 0px;
  width: 90%;
  margin-top: 10px;
  margin: 10px;
`
export const ReadTextArea = styled.textarea`
  border-width: 0px;
  width: 90%;
  margin-top: 10px;
  margin: 10px;
`
export const TextRight = styled.div`
  text-align: right;
`

export const ReadButton = styled.button`
  font-family: 'Roboto';
  font-size: '16px';
  width: 80px;
  height: 38px;
  color: #ffffff;
  background-color: #4c63b6;
  border-radius: 4px;
  border-width: 0px;
  align-self: flex-end;
  margin: 10px;
  margin-top: 10px;
`
export const ContainerItem = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
