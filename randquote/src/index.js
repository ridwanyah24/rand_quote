import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from "https://esm.sh/@fortawesome/react-fontawesome";
import { faTumblr, faTwitter, faTwitterSquare } from "https://esm.sh/@fortawesome/free-brands-svg-icons";


const root = ReactDOM.createRoot(document.getElementById('root'));

//React

const quotes = [
  { quote: 'when there\'s life there\'s hope', author: 'ridwan' },
  { quote: 'gimme a break', author: 'mubarak' },
  { quote: 'Black Lives Matter', author: 'Mathai Wangari' },
  {quote: "You have to look within yourself, to save yourself from your other self, only then will your trueself reveal itself", author: "Uncle Iroh"}
];
const colors = ['red', 'green', 'lightgreen', 'black', 'deepblue']

class TestReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      bgColor: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.handleNewQuote()
  }

  handleNewQuote() {
    let rand = Math.floor(Math.random() * quotes.length); // Need to include all quotes
    let randColor = Math.floor(Math.random() * colors.length)
    
    this.setState( 
      { 
        quote: quotes[rand].quote,
        author: quotes[rand].author,
        bgColor: colors[randColor]
    });

    document.body.style.backgroundColor = colors[randColor]
    document.body.style.transition = "background-color 0.7s"
    document.body.style.color = colors[randColor]
  }
  
  handleSubmit(){
    this.handleNewQuote();
  }

  render() {

    const container = {
      backgroundColor: this.state.bgColor,
      color: "white",
      transition: 'background-color 0.5s',
      borderRadius: 5
    }

    return (
      <div className='blockQuote' id="quote-box">
        <blockquote id='text'>"{this.state.quote}</blockquote>
        <p id="author"> - {this.state.author}</p>
        <div className='quotees'>
        <div id="icons">
        <a href='twitter.com/intent/tweet' target='_blank' id="tweet-quote" style={container}><FontAwesomeIcon icon={faTwitter} className='fab fa-twitter'/></a>
        <a href='twitter.com/intent/tweet' target='_blank' id="tweet-quote" style={container}><FontAwesomeIcon icon={faTumblr} className='fab fa-tumblr'/></a>
        </div>
        <button type='submit' onClick={this.handleSubmit} style={container} id="new-quote">
          New Quote
        </button>
        </div>
      </div>
    );
  }
}
root.render(<TestReact />);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
