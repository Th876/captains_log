const React = require('react');

class Show extends React.Component {
    render(){
        const logs = this.props.log;
        return (
            <div>
                <h1>Captain's Log Show page</h1>
                <b>Title: </b>{logs.title} <hr></hr>
                <b>Entry: </b> { logs.entry}<br></br>
                <br></br>
                <b>Is the ship broken? </b>
                {logs.shipIsBroken? 
                'Yes, shout your mateys for help!' : 'No, let\'s sail the 7 seas'
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