import { Component } from 'react';

import normalize from 'json-api-normalizer';

class TestComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount () {
    fetch(
      'https://api.alphacontainer.de/1/node/article?include=field_loop&fields%5Bnode--article%5D=title,created,field_loop&fields%5Bfile--file%5D=uri,url&filter%5Bloop%5D%5Bpath%5D=field_loop.id&filter%5Bloop%5D%5Boperator%5D=%3C%3E&filter%5Bloop%5D%5Bvalue%5D=0')
      .then(response => response.json())
      .then(data => TestComponent.test(data));
  }

  static test (data) {
    console.log(data);
    console.log(normalize(data, {endpoint: '/node/article'}));
  }

  render = () => null;
}

export default TestComponent;
