import styled from 'styled-components'
import { variables } from './../variables'

export const Button = styled.button`
  background: var(--cYellow);
  border: none;
  padding: 15px 20px;
  border-radius: 8px;
  width: 100%;
  font-weight: 700;
  color: var(--cFont);

  @media (min-width: ${variables.bpMedium}) {
    width: 300px;
  }

  &:hover {
    cursor: pointer;
  }
`

export const IconButton = styled.button`
  background: var(--cYellow);
  border: none;
  padding: 6px;
  border-radius: 8px;
  width: 100%;
  font-weight: 700;
  color: var(--cFont);
  display: flex;

  @media (min-width: ${variables.bpMedium}) {
    width: 300px;
  }

  &:hover {
    cursor: pointer;
  }
`

export const HeaderButton = styled.button`
  background: var(--cYellow);
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  width: 100%;
  font-weight: 700;
  color: var(--cFont);

  @media (min-width: ${variables.bpMedium}) {
    width: 300px;
  }

  &:hover {
    cursor: pointer;
  }
`
