import React from 'react';
import '../App.css';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import { Message, Divider } from 'semantic-ui-react'


class Transpiler extends React.Component{
  constructor(props){
    super(props);
    this.state={es5:'',es6:''};
    this.onChange = this.onChange.bind(this);
  }
  onChange(code){
    try{
      this.setState({es6: code, es5: window.Babel.transform(code, {presets:['es2015']}).code});
    }
    catch(e){
      this.setState({es6:code});
    }
  }
  render(){return(
    <div>
      <Message color='black'>Time-Machine is an ES6 to ES5 Transpiler. Simply start typing/pasting ES6 code in the left editor.</Message>
      <Divider/>
      <div className="flex-ace-container">
        <AceEditor
          className="aceEditor"
          width="100%"
          mode="javascript"
          theme="monokai"
          value={this.state.es6}
          onChange={this.onChange}
          name="es6"
          editorProps={{$blockScrolling: true}}
        />
        <AceEditor
          className="aceEditor"
          width="100%"
          mode="javascript"
          theme="monokai"
          value={this.state.es5}
          name="es5"
          readOnly={true}
          editorProps={{$blockScrolling: true}}
        />
      </div>
    </div>
    )
  }
}

export default Transpiler;
