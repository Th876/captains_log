const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>Captain's Log New page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/logs" method="POST">
                <label for="title">Title: </label>
               <input type="text" name="title" /><br/>

               <label for="entry">Entry: </label>
              <input type="textarea" name="entry" /><br/>

              <label for="shipIsBroken"> Is ship broken? </label>
              <input type="checkbox" name="shipIsBroken" /><br/>
              <input type="submit" name="submit" value="Submit"/>
            </form>
        </div>);
    }
  }

module.exports = New;