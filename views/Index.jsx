const React = require('react');

class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div title={"Captain's Log Index"}> 
      <h1>Captain's Log Index page</h1>
        <ul>
          {
            logs.map((log)=>{
              return (
                <li key={log._id}>
                  The <a href={`/logs/${log._id}`}>{log.title}</a>
                  <br></br>
                  <nav>
                    <a href="/logs/new">Create a New Log</a>
                    </nav>
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