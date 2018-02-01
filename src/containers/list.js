import React, { Component } from 'react'
import { Beer } from '../components'
import styles from '../stylesheets/containers/list.scss'
import { connect } from 'react-redux'
import { FetchBeerList, toggleBeerDescription } from '../redux-flow/reducers/beer/action-creators'
class List extends Component {
  componentWillMount(){
    this.props.FetchBeerList();
  }
  render() {
    if(this.props.beer.isFetching === false)
      return ( 
        <div className={styles.list}>
        {this.props.beer.data.map(b =>
          <Beer name={b.name} tagline={b.tagline} /> )
        }
        </div>
      )
    else
      return (<div>Buscando dados</div>) 
  }
}

const mapStateToProps = state => ({
  beer: state.beer
})

const mapDispatchToProps = dispatch => ({
  toggleBeerDescription: index => e => {
    dispatch(toggleBeerDescription(index))
  },
  FetchBeerList: () => {
    dispatch(FetchBeerList(dispatch))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)