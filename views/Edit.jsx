const React = require('react');

class Edit extends React.Component{
  render() {
    const logs = this.props.logs;
    return (
      <div>      
        <h1>Captain's Log Edit page</h1>
          <form action={`/logs/${logs._id}?_method=PUT`} method="POST">
          <b>Title</b><input type="text" name="title" defaultValue={logs.title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={logs.entry}/><br/>
          <b>Is the ship broken?</b>
              <input type="checkbox" value={logs.shipIsBroken} name="shipIsBroken"/>
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;