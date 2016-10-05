const React = React || require('react')
const {Row, Col} = ReactBootstrap || require('react-bootstrap')

class About extends React.Component {
  render () {
    return (
      <Row>
        <Col>
          <h2>{this.props.title}</h2>
          <h3>{this.props.message}</h3>
          <p>Use this area to provide additional information.</p>
        </Col>
      </Row>
    )
  }
}