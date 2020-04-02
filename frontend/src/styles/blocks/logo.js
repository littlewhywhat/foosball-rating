import styled from 'styled-components'
import { variables } from './../variables'

export const Logo = styled.span`
  #smalllogo {
    display: none
  }
  @media (max-width: ${variables.bpMedium}) {
    #largelogo {
      display: none
    }
    #smalllogo {
      display: flex
    }
  }
  height: 100%;
  a,img {
    height: 100%;
  }
  a {
    padding: 0px;
  }
`
