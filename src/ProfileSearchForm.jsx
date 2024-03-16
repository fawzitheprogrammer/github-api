// ProfileSearchForm.js
import { useState } from "react";
import "./styles.css"




function ProfileSearchForm({ search }) {
  const [term, setTerm] = useState("");


  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-wrapper">
        <input
          value={term}
          onChange={handleChange}
          placeholder="Search GitHub user"
          className="w-full"
          required
        />
      <button type="submit">
  <i className="fas fa-search"></i>
</button>

      </div>
    </form>
  );
}

export default ProfileSearchForm;
