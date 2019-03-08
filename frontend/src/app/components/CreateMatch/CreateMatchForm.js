import React, { Component } from 'react'
import { 
    Title,
    GridContainer, 
    Box,
  } from './../../../styles/blocks'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { getUsers } from '../../modules/users/users-selectors'
import { SelectTeamForm } from './SelectTeamForm'
import { MatchesActions } from '../../modules/matches/matches-actions'
import { SUCCESS, READY } from '../../modules/api/request-status'
import { DASHBOARD } from '../../const/routes'
import { StatusReportField } from '../StatusReport/StatusReportField';

class CreateMatchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team1: [],
      team2: [],
      error: null
    }
  }

  team1Changed = (team1) => {
    this.setState({
      team1
    })
  }

  team2Changed = (team2) => {
    this.setState({
      team2
    })
  }

  hasEnoughPlayersOnTeam = (team) => team.length >= this.props.minPlayerNumber

  arePlayersDistinct = () => {
    const allPlayers = [...this.state.team1, ...this.state.team2]
    const distinctPlayersSet = new Set(allPlayers)
    return allPlayers.length == distinctPlayersSet.size
  }

  getErrorMessage = () => {
    if (!this.hasEnoughPlayersOnTeam(this.state.team1)) {
      return "Not enough players on Team 1"
    }

    if (!this.hasEnoughPlayersOnTeam(this.state.team2)) {
      return "Not enough players on Team 2"
    }

    if (!this.arePlayersDistinct()) {
      return "A single player can't be selected twice"
    }

    return null
  }

  submit = (team1Won) => {
    if (this.getErrorMessage() != null) {
      return
    }

    this.props.createMatch({
      team1: this.state.team1,
      team2: this.state.team2,
      team1Won
    })
  }

  getTextForRequestStatus = (status) => {
    switch (status) {
        case IN_PROGRESS:
            return "Creating..."
        case SUCCESS:
            return "Succesfully created!"
        case FAILURE:
            return "Failed to create the match :("
    }

    return ""
  }

  render = () => {
    if (this.props.requestStatus == SUCCESS) {
      this.props.history.push(DASHBOARD)
    }

    const inputError = this.getErrorMessage()
    const canSubmit = inputError == null && this.props.requestStatus == READY
    
    return (
    <>
      <Title>Match</Title>
      <GridContainer Column="1fr 1fr">
      <Box Margin="0 10px">
        <SelectTeamForm maxPlayerNumber={this.props.maxPlayerNumber} 
                        teamName="Team 1" 
                        users={this.props.users} 
                        teamChanged={this.team1Changed} 
                        teamSubmitted={() => this.submit(true)}
                        canSubmit={canSubmit} />
      </Box>
      <Box Margin="0 10px">
        <SelectTeamForm maxPlayerNumber={this.props.maxPlayerNumber} 
                        teamName="Team 2" 
                        users={this.props.users} 
                        teamChanged={this.team2Changed} 
                        teamSubmitted={() => this.submit(false)}
                        canSubmit={canSubmit} />
      </Box>
      </GridContainer>
      <div>{inputError || ""}</div>
      <StatusReportField status={this.props.requestStatus} />
    </>
  )}
}

const mapStateToProps = state => ({
  users: getUsers(state),
  requestStatus: state.matches.status
})

const mapDispatchToProps = dispatch => ({
  createMatch: match => {
    dispatch(MatchesActions.Creators.addMatch(match))
  }
})

const RoutingCreateMatchForm = withRouter(CreateMatchForm)
export const SmartCreateMatchForm = connect(mapStateToProps, mapDispatchToProps)(RoutingCreateMatchForm)
