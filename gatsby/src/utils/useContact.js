import {useState} from "react";

export default function useContact({values}) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // this is the function that is run when someone submits the form
  async function submitOrder(e) {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    setError(null);
    // setMessage('do something');

    // gather all the data
    const body = {
      name: values.name,
      email: values.email,
      message: values.message,
      mapleSyrup: values.mapleSyrup,
    };
    console.log(body);
    // 4. Send this data to the serevrless function when they check out
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());

    // check if everything worked fine
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      // it worked!
      setLoading(false);
      setMessage('Success! Come on down for your Message');
    }
  }

  return {
    error,
    loading,
    message,
    submitOrder
  }
}
