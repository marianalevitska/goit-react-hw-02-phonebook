import { Component } from 'react';

import Phonebook from "components/Phonebook";


// export const App = () => {
//   // state = {
//   //   contacts: [],
//   //   name: ''
//   // }
//   return (
//     <div>
//       <Phonebook />

//     </div>
//   );
// };

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (
      <div >
        <Phonebook />
      </div >)

  }
}

export default App;