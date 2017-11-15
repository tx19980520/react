import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
//import ToDoApp from '.components/ToDoApp';


export default class App extends Component {
	
  constructor(props){
    super(props);
    this.state={liked:true,showlike:"like",checknum:0,realnum:2333};
    this.click = this.click.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    names: 'Xiao Tan',
    times: '2017-11-11',
  }
  click() {
    this.setState(prevState => ({
      liked: !prevState.liked
    }));
  }

  handleChange(event) {
    this.setState({checknum: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.realnum < this.state.checknum)
    {
      alert(this.state.checknum + " is bigger than the number.");
    }
    else if(this.state.realnum > this.state.checknum){
      alert(this.state.checknum + ' is smaller than the number.');
    }
    else if(this.state.checknum == this.state.realnum)
    {
      alert(this.state.realnum +" is right! and we start a new game!");
      var Range = 10000;
      var Rand = Math.random();
      var final = Math.round(Rand*Range);
      this.setState({realnum: final});
      this.setState({checknum:0});
    }
    event.preventDefault();
  }
  tick() {
  const element = (
    <div>
    <h4 className="text-center">It is {new Date().toLocaleTimeString()}.</h4>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('time')
  );
}

   render() {
     return (
       <div class="all">
       <div className='text-center'><h1>There is a guess number game!</h1></div>
       <br/><br/>
       <div id="time"></div>
       <p className="text-center">author: {this.props.names}<time> {this.props.times} </time></p>
       <div className="row">
       <div className="col-md-10 col-md-offset-1">
       <div className="panel panel-default inner">
       <div className="panel-body">
       <h4 className="text-center">你到底喜不喜欢我呢</h4>
       <div class="guess">
       <p className="text-center">You <button id="click" onClick={this.click}>{this.state.liked?"like":"hate"}</button> me.</p>
       </div>
       <hr class="hr" />
       <div className="col-sm-4"></div>
       <label className="text-center col-sm-2 control-label">input a number:</label>
       <form onSubmit={this.handleSubmit} className="bs-example bs-example-form" >
       <div className="input-group text-center" style={{ width:200}}>
       <input type="number" className="form-control" placeholder="请输入一个数字" value={this.state.checknum} onChange={this.handleChange} />
       <span class="input-group-btn">
						<button class="btn btn-default" type="submit">
							Go!
						</button>
					</span>
       </div>
       </form>
       </div>
       </div>
       </div>
       </div>
     </div>
     );
   }
 }
//ReactDOM.render(<App/>,document.getElementById('root'));
function tick() {
  const element = (
    <div>
    <h4 className="text-center">It is {new Date().toLocaleTimeString()}.</h4>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('time')
  );
}
setInterval(tick, 1000);