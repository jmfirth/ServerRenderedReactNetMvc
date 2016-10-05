const React = React || require('react')
const {Navbar, Nav, NavItem, Grid, Row, Col} = (ReactBootstrap || require('react-bootstrap'))

class Layout extends React.Component {
  static tagName = "Layout"

  render () {
    const {links = [], children, year} = this.props
    const linkItems = links.map(link => <NavItem href={link.Url}>{link.Title}</NavItem>)

    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>Application name</Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {linkItems}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid className="body-content">
          <span dangerouslySetInnerHTML={{ __html: children}} />

          <hr/>
          <footer>
            <p>&copy; {year} - My ASP.NET Application</p>
          </footer>
        </Grid>
      </div>
    )
  }
}