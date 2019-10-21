import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import Item from '../components/findme/main/Item'
import { loadFindMeList, getSession } from '../utils/api'
import { AppLoading } from 'expo'
import { setList } from '../actions/findme'
import { setSession } from '../actions/session'
import Header from '../components/findme/main/Header'
import { Feather } from '@expo/vector-icons'

class FindMeMainScreen extends Component {
  state = {
    ready: false,
  }
  componentDidMount() {
    const { dispatch, session } = this.props

    !session.id && getSession()
      .then((session) => dispatch(setSession(session)))

    loadFindMeList()
      .then((list) => dispatch(setList(list)))
      .then(() => this.setState({ ready: true }))
  }

  render() {
    const { ready } = this.state
    const { list, navigation } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {

          Object.keys(list)
            .map((key) => {
              return (
                <Item
                  key={list[key].id}
                  imageURL={list[key].imageURL}
                  isSecret={list[key].isSecret}
                  author={list[key].author}
                  title={list[key].title}
                  date={list[key].date}
                  navigation={navigation}
                  onPress={() => navigation.navigate(
                    'FindMeDetailScreen',
                    { id: list[key].id }
                  )}
                />
              )
            })
        }
      </ScrollView>
    )
  }
}

FindMeMainScreen.navigationOptions = (navigation) => ({
  headerTitle: <Header navigation={navigation}/>,
})

function mapStateToProps({ findme, session }) {
  return {
    list: findme.list,
    session: session,
  }
}

export default connect(mapStateToProps)(FindMeMainScreen)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})

