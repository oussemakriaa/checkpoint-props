import './App.css';
import Profile from './Profile/Profile';


function App() {
  const profile = { fullname: "Oussema kriaa", sexe: "homme", profession: "Full Stack Dev" }
  const handleClick = (x) => {
    alert(x);
  };

  return (
    <div className="App" style={{display: 'grid', gridTemplateColumns:'40% 20% 40%' }} >
      <div></div>
      <div style={{backgroundColor: '#eee',border:'solid',paddingTop:'10px',paddingBottom:'10px',textAlign:'center',borderRadius:'30px'}}>
        <Profile profile={profile} handleClick={handleClick} >
          <img src="oussema.jpg" alt="oussema" width="200px" height="200px"></img>

        </Profile>
      </div>
      <div></div>
    </div>
  );
}

export default App;
