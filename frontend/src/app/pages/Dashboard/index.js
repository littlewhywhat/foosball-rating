import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { 
  Subtitle,
  Button
} from './../../../styles/blocks';
import { BattleHistory } from './../../components/BattleHistory/BattleHistory';
import { TopRating } from '../../components/TopRatings/TopRating';
import { CreateMatchStatus } from '../../components/CreateMatch/CreateMatchStatus';
import { CREATE_MATCH, MATCH_LIST, USER_LIST } from '../../const/routes'

class DashboardComponent extends Component {
  createMatch = () => {
    this.props.history.push(CREATE_MATCH)
  }

  render() {
    return(
      <>
        <Button onClick={this.createMatch}>Add Match</Button>
        <CreateMatchStatus status={this.props.createMatchStatus} />
        <Subtitle textAlign="center">Last Battles</Subtitle>
        <BattleHistory maxItems={5} />
        <Link to={MATCH_LIST}>Show all...</Link>
        <Subtitle textAlign="center">Top Rating</Subtitle>
        <TopRating maxItems={5} />
        <Link to={USER_LIST}>Show all...</Link>
      </>
    )
  }
}

const mapStateToProps = state => ({
  createMatchStatus: state.matches.status
})

const RoutingDashboardComponent = withRouter(DashboardComponent)

export const Dashboard = connect(mapStateToProps)(RoutingDashboardComponent)
