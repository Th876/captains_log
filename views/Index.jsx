const React = require('react');

class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div title={"Captain's Log Index"}>
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

/*
    //    {/* {' '}is {logs.entry} <br/> */
    //    {/* { */}
        //  {/* // logs.shipIsBroken? */}
        //  {/* // '  No, let\'s sail the 7 seas': */}
        //  {/* // '  Yes, shout your mateys for help!' */}
    //  {/* //   } */}*/
// const React = require('react');

// class Index extends React.Component {
//   render() {
//     return (
//         <div>
//             <h1>Fruits index page</h1>
//             <ul>
//             {
//             this.props.fruits.map((fruit, i) => {
//     return (
//         <li>
//         The <a href={`/fruits/${ fruit.id }`}> { fruit.name } </a> is { fruit.color }
//         { fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat` }
//         </li>
//         )
//     })
// }
//             </ul>
//             <nav>
//               <a href="/fruits/new">Create a New Fruit</a></nav>
//         </div> );
//   }
// }

// module.exports = Index;

// // const React = require('react');

// //     class Index extends React.Component {
// //       render() {
// //           const { fruits } = this.props;
// //           return (
// //           <div>
// //             <h1>Fruits Index Page</h1>
// //             <ul>
// //                 {fruits.map((fruit, i) => {
// //                     return (
// //                     <li key={i}>
// //                         The{' '}
// //                         <a href={`/fruits/${i}`}>
// //                             {fruit.name}
// //                             </a>{' '}
// //                             is {fruit.color} <br></br>{fruit.readyToEat ? `It is ready to eat`: `It is not ready to eat`} <br />
// //                     </li>
// //                     );
// //                           })}
// //                       </ul>

// //                       <nav>
// //                         <a href="/fruits/new">Create a New Fruit</a>
// //                     </nav>
// //                   </div>
// //           );
// //       }
// //     }
// //     module.exports = Index;