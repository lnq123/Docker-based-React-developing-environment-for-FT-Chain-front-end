import React, { Component } from 'react'
import CategoryContent from './category_content'

export default class Category extends Component {
  state ={
    hover: false,
  }

  handleEnter () {
    this.setState((state) => {
      return {
        hover: true,
      }
    })
    this.props.handleHover()
  }

  handleLeave () {
    this.setState((state) => {
      return {
        hover: false,
      }
    })
  }

  render () {
    let jumbo = null
    if (this.state.hover) {
    // if (true) {
      jumbo = (
        <div
          style={{
            position: 'fixed',
            top: `${this.props.subheight}px`,
            left: 0,
            width: `${this.props.subwidth}px`,
            height: '200px',
            background: 'rgba(37, 38, 37, 1.0)',
          }}
        >
          <CategoryContent></CategoryContent>
        </div>
      )
    }
    let fw = 300
    if (this.state.hover) fw = 700
    return (
      <div
        onMouseEnter={ this.handleEnter.bind(this) }
        onMouseLeave={ this.handleLeave.bind(this) }
        style={{ height: '60px' }}
      >
        <span
          style={{
            position: 'absolute',
            lineHeight: '100%',
            marginTop: '17px',
            fontSize: '20px',
            color: 'white',
            fontWeight: fw,
          }}
        >
          热门
        </span>
        { jumbo }
      </div>
    )
  }
}
