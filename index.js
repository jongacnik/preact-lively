var preact = require('preact')

class LivelyElement extends preact.Component {
  constructor (props, state) {
    super()
    this.onload = props.onload
    this.onunload = props.onunload
  }

  componentDidMount (props, state) {
    this.onload && typeof this.onload === 'function' ? this.onload(this.base) : null
  }

  componentWillUnmount (props, state) {
    this.onunload && typeof this.onunload === 'function' ? this.onunload(this.base) : null
  }

  render (props) {
    return preact.h('div', {}, props.children)
  } 
}

module.exports = LivelyElement
