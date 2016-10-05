const React = React || require('react')
const {Row, Col} = ReactBootstrap || require('react-bootstrap')

class Contact extends React.Component {
  render () {
    return (
      <Row>
        <Col>
          <h2>{this.props.title}</h2>
          <h3>{this.props.message}</h3>
          <address>
            One Microsoft Way<br />
            Redmond, WA 98052-6399<br />
            <abbr title="Phone">P:</abbr>
            425.555.0100
          </address>

          <address>
            <strong>Support:</strong> <a href="mailto:Support@example.com">Support@example.com</a><br />
            <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">Marketing@example.com</a>
          </address>
        </Col>
      </Row>
    )
  }
}