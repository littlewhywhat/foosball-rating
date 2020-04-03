import styled from 'styled-components'
import { variables } from './../variables'

const SimpleButton = styled.button`
  background: var(--cYellow);
  border: none;
  border-radius: 8px;
  color: var(--cFont);

  &:hover {
    cursor: pointer;
  }
`

export const Button = styled(SimpleButton)`
  padding: 15px 20px;
  width: 100%;
  @media (min-width: ${variables.bpMedium}) {
    width: 300px;
  }
`

// export const IconButton = styled(SimpleButton)`
//   padding: 8px;
//   display: flex;
//   svg {
//     height: 1.8em;
//     width: 1.8em;
//     font-size: inherit;
//   }
// `

// export const HeaderButton = styled(SimpleButton)`
//   padding: 10px;
// `
