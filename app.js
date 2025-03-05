const { Component, mount, xml } = owl;

// Owl Components
class Root extends Component {
  static template = xml`<div>Hello World</div>`;
}

mount(Root, document.body);