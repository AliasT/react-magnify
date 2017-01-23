import React from 'react'
import MagnifyGlass from '../src'
import ReactDOM from 'react-dom'


const imageSets = [
  {
    src: '//img.alicdn.com/imgextra/i3/1695308781/TB27X6ecRyN.eBjSZFgXXXmGXXa_!!1695308781.jpg_60x60q90.jpg',
    big: 'https://img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg',
    medium: '//img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg_430x430q90.jpg'
  },
  {
    src: '//img.alicdn.com/bao/uploaded/i2/TB1fF9SPXXXXXcrXpXXXXXXXXXX_!!0-item_pic.jpg_60x60q90.jpg',
    big: '//img.alicdn.com/imgextra/i3/1695308781/TB22LrmcNeK.eBjSZFuXXcT4FXa_!!1695308781.jpg',
    medium: '//img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg_430x430q90.jpg'
  },
  {
    src: '//img.alicdn.com/imgextra/i3/1695308781/TB22LrmcNeK.eBjSZFuXXcT4FXa_!!1695308781.jpg_60x60q90.jpg',
    big: 'https://img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg',
    medium: '//img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg_430x430q90.jpg'
  },
  {
    src: '//img.alicdn.com/imgextra/i4/1695308781/TB2U2sfevSM.eBjSZFNXXbgYpXa_!!1695308781.jpg_60x60q90.jpg',
    big: 'https://img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg',
    medium: '//img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg_430x430q90.jpg'
  },
  {
    src: '//img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg_60x60q90.jpg',
    big: 'https://img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg',
    medium: '//img.alicdn.com/imgextra/i2/1695308781/TB2pcjMdxxmpuFjSZFNXXXrRXXa_!!1695308781.jpg_430x430q90.jpg'
  }
]
ReactDOM.render(<MagnifyGlass imageSets={imageSets} />, document.querySelector('#app'))

