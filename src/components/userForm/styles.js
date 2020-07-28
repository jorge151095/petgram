import styled from 'styled-components'

export const Layout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  padding: 16px 0;
  width: 100%;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;

  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  padding: 8px 0;
`
