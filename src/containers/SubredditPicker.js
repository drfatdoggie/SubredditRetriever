import React, {Component} from 'react'
import { Picker } from "react-native";
import { connect } from 'react-redux';
import { selectSubReddit } from '../actions/actions';

class SubredditPicker extends Component {
  state = {
    selectedSubreddit: 'reactjs'
  }

  handleChange = (subreddit) => {
    this.props.dispatch(selectSubReddit(subreddit))
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.selectedSubreddit}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex)=>{
          this.setState({selectedSubreddit: itemValue})
          this.handleChange(this.state.selectedSubreddit)
          }
        }
      >
        <Picker.Item label="reactjs" value="reactjs"/>
        <Picker.Item label="dogs" value="dogs"/>
        <Picker.Item label="Awww" value="Awww"/>
      </Picker>
    )
  }

}

export default connect()(SubredditPicker);