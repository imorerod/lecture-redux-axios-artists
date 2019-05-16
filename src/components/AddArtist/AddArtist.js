import React, { Component } from 'react';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'
import { postArtists, getArtists } from '../../Modules/Services/artist.service'

class AddArtist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enteredName: { name: '' },
        }
    }
    changeName = (event) => {
        console.log(event);
        const inputValue = event.target.value;
        this.setState({
            enteredName: { name: inputValue },
        })
    }

    addArtist = (event) => {
        this.postNewArtist(this.state.enteredName);
    }

    postNewArtist(artistObject) {
        postArtists(artistObject)
            .then((response) => {
                getArtists()
                .then((response)=>{
                    this.props.dispatch({
                        type: 'ADD_ARTISTS_LIST',
                        payload: response.data
                    })
                    this.props.history.push('/');
                });
            })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Artist Name"
                    onChange={this.changeName}
                />
                <button onClick={this.addArtist}>Add Artist</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(AddArtist);