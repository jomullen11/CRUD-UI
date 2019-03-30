// import React, { Component } from 'react'
// import { API_URL } from '../config'

// export default class Presenter extends Component {
// //this handles the delete function
//     handleDelete = async () => {
//         await fetch(`${ API_URL }/info/${ this.props.read._id }`, {
//         method: "DELETE",
//         }).then( res => console.log(res))
//         // .then(window.location.replace(`http://localhost:3001`)) //this will reload the page
//         .then(() => this.props.refresh()) // this sends the refresh to the Read page, must import file to refresh
//         .catch(err => console.log(err))
//     }
// //this is in the presenter file
//     render() {
//         const read = this.props.read
//         return(
//             <fieldset>
//                 <ul>
//                     <h2>{read.name}</h2>
//                     <h4>{read.phone}</h4>
//                     <h4>{read.email}</h4>
//                 </ul>
//                 <input type="button" value="Delete" onClick={ this.handleDelete } />
//             </fieldset>
//         )
//     }
// }
