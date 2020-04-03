import React from 'react'
import { connect } from 'react-redux'

import {
  Logo,
  SimpleButton,
} from './../../styles/blocks/'
import { ThemeActions } from '../modules/theme/theme-actions'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import { ThemeTypes } from '../const/theme-types'

const HeaderComponent = ({ className, theme, changeTheme, children }) => (
  <nav className={className}>
    <Logo/>
    {children}
    <SimpleButton id="theme" onClick={() => {changeTheme(theme)}}>
      { theme === ThemeTypes.Dark? <Brightness7Icon /> : <Brightness4Icon/> }
    </SimpleButton>
  </nav>
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
