import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import Item from '../components/findme/main/Item'
import Nav from '../components/findme/main/Nav'
import { loadFindMeList, getSession } from '../utils/api'
import { AppLoading } from 'expo'
import { setList } from '../actions/findme'
import { setSession } from '../actions/session'
import Header from '../components/findme/main/Header'

class FindMeMainScreen extends Component {
  state = {
    ready: false,
    page: 'all',
  }
  componentDidMount() {
    const { dispatch, session } = this.props

    !session.id && getSession()
      .then((session) => dispatch(setSession(session)))

    loadFindMeList()
      .then((list) => dispatch(setList(list)))
      .then(() => this.setState({ ready: true }))
  }

  goPage = (page) => {
    this.setState({ page: page })
  }

  render() {
    const { ready, page } = this.state
    const { list, navigation } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollArea}
          onScrollBeginDrag={this.fadeIn}
          onScrollEndDrag={this.fadeOut}
        >

          <Nav
            page={page}
            goPage={this.goPage}
          />
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
                    timestamp={list[key].timestamp}
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
      </View>
    )
  }
}

FindMeMainScreen.navigationOptions = (navigation) => ({
  headerTitle: <Header navigation={navigation} />,
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
  },
  scrollArea: {
    alignItems: 'center',
  },
  floatingButton: {
    backgroundColor: 'blue',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
})

