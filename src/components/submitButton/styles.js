import styled from 'styled-components'

export const Button = styled.button`
  background: #bb0000;
  border-radius: 20px;
  color: #fff;
  height: 32px;
  display: block;
  width: 30%;
  text-align: center;
  font-size: 15px;

  &[disabled] {
    opacity: .3;
  }
`
