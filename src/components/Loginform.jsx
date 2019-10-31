import axios from 'axios';
import React, {useState} from 'react';

const url = `http://0.0.0.0:20000/service/fundasc/graphql`;

function Loginform() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleCodeChange = event => {
    setCode(event.target.value);
  };

  const handleEmailSubmit = event => {
    event.preventDefault();
    console.log('Email', email);

    // make request
    const ans = axios.post(url, {
      query: `code(email: "${email}")`,
    });
    console.log(ans);

    setEmail('');
  };

  const handleCodeSubmit = event => {
    event.preventDefault();
    console.log('Code', code);
    setCode('');

    // handle page transition
  };

  return (
    <div className="form_container card">
      <form method="POST" onSubmit={handleEmailSubmit}>
        <input
          name="email"
          type="email"
          className="input is-medium"
          placeholder="example@example.com"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="button is-primary is-medium is-fullwidth"
          type="submit"
          value="Get Code"
        />
      </form>
      <form className="code_form" method="POST" onSubmit={handleCodeSubmit}>
        <input
          name="code"
          type="text"
          className="input is-medium"
          placeholder="login code"
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
