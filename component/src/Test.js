import './Test.scss';
import $ from 'jquery';


function Test(props) {
    
    $('div').css('color','red')
    return (
      <div className="banner">배너
      <img src = {props.src}/>
      </div>
    );
  }

  export default Test;