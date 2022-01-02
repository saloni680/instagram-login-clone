class InstaForm extends React.Component{
render(){
return(

<div class = "row justify-content-center">
<div class = 'col-4'>
<body>
<div class= 'container'>
  <form>
  <br/>
  <img src="https://i.imgur.com/zqpwkLQ.png" />
    <br/><br/>
    <input type = 'text' placeholder = 'Phone Number, username, or email' class= 'uname' required />
    <br/><br/>
    <input type = 'varchar' placeholder = 'Password' class ='pass' required />
    <br/><br/>
    <button class = 'btn btn-primary btn-block '> <b> Log In </b></button>
    <hr></hr>
    <div class='or'>
      OR
    </div>
    <div class = "hr2">
      <hr></hr>
    </div>
    <p class = 'opt'><b>Log in with Facebook</b></p>
    <p class="forgot"> Forgot password?</p>
  </form> 
    <div class='sub-menu'>
  <p>Dont't have an account?<a href="#"><b>Sign up</b></a></p>
  </div><br/>
 <p class= "end"> Get the app.</p> 
    </div>
    </body>
</div>
</div>

);
}
}
ReactDOM.render(<InstaForm/> , document.getElementById('app'));
