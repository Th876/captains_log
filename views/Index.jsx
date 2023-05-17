const React = require('react');

class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div> 
      <h1>Captain's Log Index page</h1>
      <nav>
        <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {
            logs.map((log)=>{
              return (
                <li key={log._id}>
                  <b>Title: </b><a href={`/logs/${log._id}`}>{log.title}</a>
                  <br></br>
                  <br></br>
                  <a href={`/logs/${log._id}/edit`}>Edit This Log</a>
                  <br></br>
                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE"/>
                        <br></br>
                        <br></br>
                    </form>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index;