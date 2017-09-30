# react-suspend-qq
> Suspend qq chat window for react.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    qq: PropTypes.string
  };

  static defaultProps = {};
  
```

## usage:
```jsx

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

```
