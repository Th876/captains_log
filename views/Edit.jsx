const React = require('react');

class Edit extends React.Component{
  render() {
    const logs = this.props.logs;
    return (
      <div>      
          <form action={`/logs/${logs._id}?_method=PUT`} method="POST">
          <b>Title</b><input type="text" name="title" defaultValue={logs.title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={logs.entry}/><br/>
          Is the ship broken?
              { logs.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;