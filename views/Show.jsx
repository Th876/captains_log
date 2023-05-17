const React = require('react');

class Show extends React.Component {
    render(){
        const log = this.props.log;
        return (
            <div>
                <h1>Captain's Log Show page</h1>
                <b>Title: </b>{log.title} <hr></hr>
                <b>Entry: </b> { log.entry}<br></br>
                <br></br>
                <b>Is the ship broken? </b>{log.shipIsBroken? 
                'No, let\'s sail the 7 seas': 
                'Yes, shout your mateys for help!'
                }
                <br></br>
                <br></br>
                <nav>
                    <a href="/logs">Back to Captain's Index</a>
                </nav>
            </div>
        )
    }
}
module.exports = Show;