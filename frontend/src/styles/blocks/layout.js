import styled from 'styled-components'
import { variables } from './../variables'

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  background: var(--cYellow);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    background: var(--cYellow);
    text-align: left;
    font-family: monospace;
    color: var(--cBlack);
    flex: 1;
  }
  button {
    width: auto;
    background: var(--cTheme);
    padding: 10px 15px;
    color: var(--cFont);
    margin: 7px;
  }
`

const Container = styled.div`
  max-width: ${variables.MaxWidth};
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  min-height: calc(100vh - 90px);
  background: #333 var(--bgPat) 0 0 repeat scroll;
  color: var(--cFont);
  padding: ${variables.baseSpacing};
  padding-top: 50px;
`

const GridContainer = styled.div`
  display: grid;
  padding: ${props => props.Padding};
  grid-template-columns: ${props => props.Column};
`

const Box = styled.div`
  display: ${props => props.Display};
  margin: ${props => props.Margin};
  padding: ${props => props.Padding};
  background: var(--cTheme);
`
const ProfileDetail = styled.div`
  display: flex;
  margin: ${props => props.Margin};
  padding: ${props => props.Padding};
  justify-content: center;

  h2 {
    font-size: ${variables.fontSizeProfileDetails};
    padding: ${variables.baseSpacing};
  }
`

export { Nav, Container, GridContainer, Box, ProfileDetail }
