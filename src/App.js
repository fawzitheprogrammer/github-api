// App.js
import ProfileSearchForm from './ProfileSearchForm';
import ProfileViewerWithSearch from './ProfileViewerWithSearch'; // Import ProfileViewerWithSearch
import "./styles.css"

import './App.css';

function App() {
  return (
    <>
      <ProfileViewerWithSearch /> {/* Render ProfileViewerWithSearch instead of ProfileSearchForm */}
    </>
  );
}

export default App;
