import { useState } from 'react';
import { BASE_API } from '../common/helpers';


const Form = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ describe , setDescribe ] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleDescribeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescribe(e.target.value);

  const fetchContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `${BASE_API}/api/feedback`;
    const body = JSON.stringify({ name, email, describe });
    const headers = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body,
    };
    const res = await fetch(url, headers);
    const data = await res.json();
  }
  return (
    <div>
      <form action="contacts.html" onSubmit={fetchContact}>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="xinput">
              <div className="xinput-icon">
                <img src="https://prices-ltc.com/assets/img/icons/user.svg"/>
              </div>
              <input
                className="w-100"
                type="text"
                placeholder="What's your name?" 
                onChange={handleNameChange}
                value={name}
              />
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="xinput">
              <div className="xinput-icon">
                <img src="https://prices-ltc.com/assets/img/icons/email.svg"/>
              </div>
              <input 
                className="w-100" 
                type="text" 
                placeholder="Your e-mail address"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
          </div>
          <div className="col-lg-12 mb-4">
            <div className="xinput">
              <textarea 
                className="w-100" 
                cols={10} 
                rows={7} 
                placeholder="Describe your problem"
                onChange={handleDescribeChange}
                value={describe}
              ></textarea>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <button type="submit" className="btn-def">Send now</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
