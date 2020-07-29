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
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  margin-bottom: 12px;
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
  padding-top: 8px;
`
