import React from 'react'
import { connect } from 'react-redux'

import {
  Logo,
  Nav,
  IconButton,
  StyledLink,
} from './../../styles/blocks/'
import { ThemeActions } from '../modules/theme/theme-actions'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import logoSmall from './../../media/logo-small.png'
import logo from './../../media/logo.png'
import { ThemeTypes } from '../const/theme-types'

const HeaderComponent = ({ theme, changeTheme, children }) => (
  <Nav>
    <Logo>
      <StyledLink id='smalllogo' to={'/'}>
        <img src={logoSmall} alt="logo" />
      </StyledLink>
      <StyledLink id='largelogo' to={'/'}>
        <img src={logo} alt="logo" />
      </StyledLink>
    </Logo>
    {children}
    <IconButton onClick={() => {changeTheme(theme)}}>
      { theme === ThemeTypes.Dark? <Brightness7Icon /> : <Brightness4Icon/> }
    </IconButton>
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
