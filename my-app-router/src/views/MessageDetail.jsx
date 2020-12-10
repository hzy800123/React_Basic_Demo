import React from 'react'

const allMessages = [
  {id: 1, title: 'message001', content: '我爱你，中国'},
  {id: 2, title: 'message002', content: '我爱你，老婆'},
  {id: 3, title: 'message003', content: '我爱你，孩子'},
  {id: 4, title: 'message004', content: '我爱你，父母'}
]

const MessageDetail = (props) => {

  // console.log(props)
  // debugger
  const {id} = props.match.params
  const message = allMessages.find( m => m.id === id*1 )

  return (
    <ul>
      <li>ID: {message.id}</li>
      <li>Title: {message.title}</li>
      <li>Content: {message.content}</li>      
    </ul>
  )
}

export default MessageDetail
