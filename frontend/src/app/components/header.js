import React from 'react'
import { connect } from 'react-redux'

import {
  Logo,
  Nav,
  IconButton,
  StyledLink,
} from './../../styles/blocks/'
import { ThemeActions } from '../modules/theme/theme-actions'

const logo = require('./../../media/logo.png')
const moon = require('./../../media/moon.svg')

const HeaderComponent = ({ theme, changeTheme, children }) => (
  <Nav>
    // TODO maybe also logo could be smaller?
    <Logo><StyledLink to={'/'}><img src={logo} alt="logo" /></StyledLink></Logo>
    {children}
    <IconButton onClick={() => {changeTheme(theme)}}><img src={moon}/></IconButton>
  </Nav>
)


const mapStateToProps = state => ({
  theme: state.theme,
})

const mapDispatchToProps = dispatch => ({
  changeTheme: theme => {
    dispatch(ThemeActions.Creators.changeTheme(theme))
  },
})

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
