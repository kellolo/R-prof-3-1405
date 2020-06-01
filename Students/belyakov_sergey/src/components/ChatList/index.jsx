import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import connect from 'react-redux/es/connect/connect'

import {addRoom, renameRoom} from '../../store/actions/room-actions'

import './style.css'

import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import {Button, List, ListItem, ListSubheader} from '@material-ui/core'


class ChatList extends Component {
  static propTypes = {
    showChatList: PropTypes.func.isRequired,
    rooms: PropTypes.object.isRequired,
    addRoom: PropTypes.func.isRequired,
    renameRoom: PropTypes.func.isRequired,
    roomId: PropTypes.number
  }

  static defaultProps = {
    roomId: 1
  }

  addNewRoom() {
    const {addRoom} = this.props
    addRoom(`Новый чат`)
  }

  changeTitleRoom(roomId) {
    const {rooms, renameRoom} = this.props
    const title = window.prompt('Новое значение', rooms[roomId].title)
    if (title) {
      renameRoom(roomId, title)
    }
  }

  render() {
    const {roomId, rooms, showChatList} = this.props

    const roomsArr = []

    Object.keys(rooms).forEach((key) => {
      roomsArr.push({
        roomId: Number(key),
        title: rooms[key].title
      })
    })

    return (
      <div className="chat-list">
        <div className="chat-list-rooms">
          <List>
            <ListSubheader component="div" className="subheader">Комнаты:</ListSubheader>
            {roomsArr.map(room => (

              <ListItem
                onClick={showChatList}
                selected={roomId === room.roomId}
                key={room.roomId}
              >
                <Link to={`/chat/${room.roomId}`}>
                  <div className="room-title">{room.title}</div>
                </Link>
                <EditIcon onClick={() => this.changeTitleRoom(room.roomId)}/>
              </ListItem>

            ))}
          </List>
        </div>
        <div className="chat-list-btn">
          <Button color="primary" onClick={() => this.addNewRoom()}>
            <AddIcon/>
            Добавить комнату
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({roomReducer}) => ({
  rooms: roomReducer.rooms
})

const mapDispatchToProps = (dispatch) => bindActionCreators({addRoom, renameRoom}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
