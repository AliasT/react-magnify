import React from 'react'

const BLANK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAQAAADbJyoPAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAAEYAAABGAGrwvPsAAAGASURBVGje7ZixSsRAEIb/E4nnI1hYKDaClbWQSlTuKfQlfAALrTyNrSj6FBbClZZ2dhrvVESC5ARBBPG3CUFOw+4MWT1lZpuQzQ/fzsw/kG0QwxMjvw1gMAZjMAZjMMMQBmMwBmMwfxnmFPy0eoidCoZaLQ7GlUsTKjNNJMNTpnVMD7y5xqpTFaREU3wpSnMm0YXJTIJm8dQW6Zy8MXvURpej9WbmAJPqDO3hTfJ5yDnzjH2ZwA2zhlslzCH6QkXtToqLfnnnjFRbP0yngDmRa31PK3fUkhym4XVZdPllnrriAnMQ30OFctOOHAXeZboRlSjjuKbfwjhpQ6cP4aRXToSG8XfUkfYwfm4CJI6ax7mu6+t3U0eLAkGZFrzKlHJW33P+ZfqB+Mf/TRHayJBhG5FKX+uc2Sp7ZzP80FvmHe/ZqtzPS5jH8DApSfKhcv+phMk1MJqeqTbg8TdPwXpmkSm7XKncH2PCPnPuMrI5YzAGYzAGYzAGYzAGYzAG444PeWzspShZQGsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDQtMTRUMTE6Mzk6MTUrMDg6MDDibzQHAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA0LTE0VDExOjM5OjE1KzA4OjAwkzKMuwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII='

export default class MagnifyGlass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: {
        medium: BLANK
      }
    }
  }

  onThumbClick(i) {
    this.setState({
      current: this.props.imageSets[i]
    })
  }

  onBaseMouseLeave(e) {

  }

  onBaseMouseEnter(e) {

  }

  render() {
    return (
      <div className="react-magnify">
        <div className="base-view">
          <img
            src={this.state.current.medium}
            onMouseEnter={ e => this.onBaseMouseEnter(e) }
            onMouseLeave={ e => this.onBaseMouseLeave(e) }
          />
        </div>

        <div className="thumb-container">
          <ul>
          {
            this.props.imageSets.map((image, i) => {
              return <li key={i}><a href="#" onClick={e=>this.onThumbClick(i)}><img src={image.src}/></a></li>
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}
