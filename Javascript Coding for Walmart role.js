//1. JavaScript Coding: Write a multiplication function in javascript to use like this.
//console.log(mul(2)(4)(5));
 
function mul(x) {
  return function(y) {
        return function(z) {
            return x * y * z
        }
    }
}
console.log(mul(2)(4)(5));

//2. React Coding: Write a countdown clock react component that has a function prop that will format the time it displays. 

const App = () => {
  function formatTime(time) {
    return 'remaining time: ' + time + ' seconds';
  }
  return <CountDownClock func={ formatTime} />
}
class CountDownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 10, display: null};
  }
  componentDidMount() {
    this.onInterval()
  }
  onInterval (){
    // for every sec, set new time state remaining
    setInterval(()=> this.countDown(), 1000); 
  }
  countDown = () => {
    // if remaining time less than 0, stop.
    if (this.state.time < 0) {
      clearInterval(this.onInterval)
    } else {
    // continue counting down by 1
      this.setState({
        time: this.state.time -1,
        display: this.props.func(this.state.time) 
      });
    }
  }
  render () {
    return <div>{this.state.display}</div>
  }
}
//3. Which of the following code snippet append an element value at the end of the array, arr?

b) arr[arr.length] = value

//4. JavaScript: what is the correct way to create a JavaScript array?
a) var items = ["Orange", "Apple"];

//5. JavaScript: What is the output of the following code
2
/*foo = 1;
(function() {
   foo = 2;
})();
var x = function () {
  foo = 3;
};
(function() {
   var foo = 4;
})();
console.log(foo); */