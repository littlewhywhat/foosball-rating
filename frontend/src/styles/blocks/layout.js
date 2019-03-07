import styled from 'styled-components';
import variables from './../variables';

const Container = styled.div`
  max-width: ${variables.MaxWidth};
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  color: ${variables.cBlack};
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.Column};
`
export { Container, GridContainer };
