import UserContext from './component/AccountContext';
import ToggleColorMode from './component/ToggleColorMode';
import Views from './component/Views';

function App() {
  return (
    <UserContext>
    <Views/>
    <ToggleColorMode/>
    </UserContext>
  );
}

export default App;
