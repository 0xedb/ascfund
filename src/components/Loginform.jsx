import React, {useState} from 'react';

function Loginform() {
  const [email, setEmail] = useState(null);
  const [code, setCode] = useState(null);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleCodeChange = event => {
    setCode(event.target.value);
  };

  return (
    <div className="form_container card">
      <div className="card-image">hello</div>
      <form method="POST" action="http://localhost:9090/fundasc">
        <input
          name="email"
          type="email"
          className="input is-medium"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="button is-success is-medium is-fullwidth"
          type="submit"
          value="Get Code"
        />
      </form>
      <form method="POST" action="http://localhost:9090/fundasc/code">
        <input
          name="code"
          type="text"
          className="input is-medium"
          required
          value={code}
          onChange={handleCodeChange}
        />
        <input
          className="button is-success is-medium is-fullwidth"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Loginform;
