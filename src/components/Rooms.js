import React from "react"
import Movie from "./Movie"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Room from "./Room"
import MovieClass from "../class/MovieClass"
import DeleteMovieForm from "../forms/DeleteMovieForm"
import EditMovieForm from "../forms/EditMovieForm"
import DetailMovieForm from "../forms/DetailMovieForm"
import App from "../App";
import RoomClass from "../class/RoomClass"

class Rooms extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            roomList:[
                
                    new RoomClass(1, 23, 10)
               
            ]
        }
    }

    render() {
        //const { roomList } = this.props
        return (
        <div>
             <h3>Lista sal kinowych</h3>
             {this.state.roomList.map((room, key) => {
                    return (
                        <Room
                            key={key}
                            id={room.id}
                            iloscMiejsc={room.iloscMiejsc}
                            iloscWolnychMiejsc={room.iloscWolnychMiejsc}
                           
                        />
                    )
                })}
            </div>
        )
    }
}

export default Rooms