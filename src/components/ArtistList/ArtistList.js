// ArtistList.js

import React, { Component } from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import { connect } from 'react-redux'
import mapReduxStateToProps from '../../Modules/mapReduxStateToProps'

class ArtistList extends Component {
    createArtistList() {
        let artistListForDom = [];
        for(let i = 0; i < this.props.reduxState.artistReducer.length; i += 1) {
            let artist = this.props.reduxState.artistReducer[i];
            let artistRow = (<ArtistListItem key={i} refreshArtists={this.props.refreshArtists} artist={artist} />);
            artistListForDom.push(artistRow);
        }
        return artistListForDom;
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.createArtistList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ArtistList);