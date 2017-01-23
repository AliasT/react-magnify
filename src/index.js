import React from 'react'
import './index.scss'


// 空白图片
const BLANK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAQAAADbJyoPAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAAEYAAABGAGrwvPsAAAGASURBVGje7ZixSsRAEIb/E4nnI1hYKDaClbWQSlTuKfQlfAALrTyNrSj6FBbClZZ2dhrvVESC5ARBBPG3CUFOw+4MWT1lZpuQzQ/fzsw/kG0QwxMjvw1gMAZjMAZjMMMQBmMwBmMwfxnmFPy0eoidCoZaLQ7GlUsTKjNNJMNTpnVMD7y5xqpTFaREU3wpSnMm0YXJTIJm8dQW6Zy8MXvURpej9WbmAJPqDO3hTfJ5yDnzjH2ZwA2zhlslzCH6QkXtToqLfnnnjFRbP0yngDmRa31PK3fUkhym4XVZdPllnrriAnMQ30OFctOOHAXeZboRlSjjuKbfwjhpQ6cP4aRXToSG8XfUkfYwfm4CJI6ax7mu6+t3U0eLAkGZFrzKlHJW33P+ZfqB+Mf/TRHayJBhG5FKX+uc2Sp7ZzP80FvmHe/ZqtzPS5jH8DApSfKhcv+phMk1MJqeqTbg8TdPwXpmkSm7XKncH2PCPnPuMrI5YzAGYzAGYzAGYzAGYzAG444PeWzspShZQGsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDQtMTRUMTE6Mzk6MTUrMDg6MDDibzQHAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA0LTE0VDExOjM5OjE1KzA4OjAwkzKMuwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII='

export default class MagnifyGlass extends React.Component {
  static defaultProps = {
    sliderUnit: 120
  }

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


  // 鼠标进入基本视图
  onBaseMouseEnter(e) {

  }


  onBaseMouseMove(e) {
    const { clientX, clientY } = e;
    const sliderUnit = this.props.sliderUnit;
    const { left, top, right, bottom, width, height } = this.refs.base.getBoundingClientRect();
    const halfUnit = sliderUnit / 2;

    var slider = this.refs.slider;
    var x, y;

    // left
    if (clientX - left <= halfUnit) {
      x = 0;
    } else if (clientX >= right - halfUnit) {
      x = width - sliderUnit;
    } else {
      x = clientX - halfUnit;
    }

    // top
    if (clientY - top <= halfUnit) {
      y = 0;
    } else if (clientY >= bottom - halfUnit) {
      y = height - sliderUnit;
    } else {
      y = clientY - halfUnit;
    }

    slider.style.left = x;
    slider.style.top  = y;
  }

  // 鼠标离开基本视图
  onBaseMouseLeave(e) {

    // left = Math.min()
  }

  render() {
    const sliderStyle = { width: this.props.sliderUnit, height: this.props.sliderUnit }
    return (
      <div className="react-magnify">
        <div className="base-view">
          <div className="slider" ref="slider" style={sliderStyle}></div>
          <img
            ref="base"
            src={this.state.current.medium}
            onMouseEnter={e => this.onBaseMouseEnter(e)}
            onMouseLeave={e => this.onBaseMouseLeave(e)}
            onMouseMove={e => this.onBaseMouseMove(e)}
          />
        </div>
        <div className="thumb-container">
          <ul>
          {
            this.props.imageSets.map((image, i) => {
              return <li key={i}><a href="#" onClick={e => this.onThumbClick(i)}><img src={image.src}/></a></li>
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}
