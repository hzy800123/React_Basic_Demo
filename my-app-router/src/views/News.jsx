import React, {Component} from 'react'

class News extends Component {
  state = {
    newsArr: [
      'news01',
      'news02',
      'news03'
    ]
  }

  render() {
    return (
      <ul>
        {
          this.state.newsArr.map((item, index) => 
            <li key={index}>
              {item}
            </li>
          )
        }
      </ul>
    )
  }
}

export default News