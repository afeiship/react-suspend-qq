import './dev.scss';
import ReactSuspendQq from './main';

/*===example start===*/

// install: npm install afeiship/react-suspend-qq --save
// import : import ReactSuspendQq from 'react-suspend-qq'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-suspend-qq">
        <ReactSuspendQq ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
