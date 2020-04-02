import styled from 'styled-components'
import { variables } from './../variables'

export const Logo = styled.span`
  img {
    width: auto;
    height: 50px;
    left: 10px;

    @media (max-width: ${variables.bpMedium}) {
      width: 50px;
      height: auto;
      margin: 5px 0;
    }
  }
`
