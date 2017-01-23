import React from 'react'
import './index.scss'


// 空白图片
const BLANK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAQAAADbJyoPAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAAEYAAABGAGrwvPsAAAGASURBVGje7ZixSsRAEIb/E4nnI1hYKDaClbWQSlTuKfQlfAALrTyNrSj6FBbClZZ2dhrvVESC5ARBBPG3CUFOw+4MWT1lZpuQzQ/fzsw/kG0QwxMjvw1gMAZjMAZjMMMQBmMwBmMwfxnmFPy0eoidCoZaLQ7GlUsTKjNNJMNTpnVMD7y5xqpTFaREU3wpSnMm0YXJTIJm8dQW6Zy8MXvURpej9WbmAJPqDO3hTfJ5yDnzjH2ZwA2zhlslzCH6QkXtToqLfnnnjFRbP0yngDmRa31PK3fUkhym4XVZdPllnrriAnMQ30OFctOOHAXeZboRlSjjuKbfwjhpQ6cP4aRXToSG8XfUkfYwfm4CJI6ax7mu6+t3U0eLAkGZFrzKlHJW33P+ZfqB+Mf/TRHayJBhG5FKX+uc2Sp7ZzP80FvmHe/ZqtzPS5jH8DApSfKhcv+phMk1MJqeqTbg8TdPwXpmkSm7XKncH2PCPnPuMrI5YzAGYzAGYzAGYzAGYzAG444PeWzspShZQGsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDQtMTRUMTE6Mzk6MTUrMDg6MDDibzQHAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA0LTE0VDExOjM5OjE1KzA4OjAwkzKMuwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=';

// 小图大图比
const RATIO = 2;

export default class MagnifyGlass extends React.Component {
  static defaultProps = {
    sliderUnit: 120
  }

  constructor (props) {
    super(props)
    this.state = {
      current: {
        medium: BLANK,
        big: BLANK
      },
      showSlider: false
    }
  }

  onThumbClick(i) {
    this.setState({
      current: this.props.imageSets[i]
    })
  }


  // 鼠标进入基本视图
  onBaseMouseEnter(e) {
    this.setState({
      showSlider: true
    })
  }


  onBaseMouseMove(e) {
    const { clientX, clientY } = e;
    const sliderUnit = this.props.sliderUnit;
    const { left, top, right, bottom, width, height } = this.refs.base.getBoundingClientRect();
    const halfUnit = sliderUnit / 2;

    var { slider, magnified } = this.refs;
    var x, y;

    // left
    if (clientX - left <= halfUnit) {
      x = 0;
    } else if (clientX >= right - halfUnit) {
      x = width - sliderUnit;
    } else {
      x = clientX - left - halfUnit;
    }

    // top
    if (clientY - top <= halfUnit) {
      y = 0;
    } else if (clientY >= bottom - halfUnit) {
      y = height - sliderUnit;
    } else {
      y = clientY - top - halfUnit;
    }



    // 设置滑块的位置
    slider.style.left = x;
    slider.style.top  = y;

    // 设置放大图的位置
    magnified.style.left = -RATIO * x;
    magnified.style.top = -RATIO * y
  }

  // 鼠标离开基本视图
  onBaseMouseLeave(e) {
    this.setState({
      showSlider: false
    })
    // left = Math.min()
  }

  render() {
    const display = this.state.showSlider ? 'block' : 'none';
    const sliderStyle = {
      width: this.props.sliderUnit,
      height: this.props.sliderUnit,
      display: display
    };
    return (
      <div className="react-magnify">
        {/* 放大的片容器图 */}
        <div className="magnify-view" style={{'display': display}}>
          <img ref="magnified" src={this.state.current.big} />
        </div>

        {/* 基本视图 */}
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

        {/* 小型缩略图 */}
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
