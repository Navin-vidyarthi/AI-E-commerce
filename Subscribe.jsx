import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const validateEmail = (email) => {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage({ text: 'Please enter a valid email.', type: 'error' });
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ text: data.message, type: 'success' });
        setEmail('');
      } else {
        setMessage({ text: data.error || 'Something went wrong', type: 'error' });
      }
    } catch (err) {
      setMessage({ text: 'Server error', type: 'error' });
    }
  };

  const styles = {
    message: {
      marginTop: '10px',
      fontSize: '14px',
    },
  };

  return (
    <div className='w-[100%] h-[40vh] bg-gradient-to-l from-[#1a1a2e] to-[#16213e]

 flex items-center justify-start gap-[10px] flex-col'>
      <p className='md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px]'>Subscribe now & get 20% off</p>
      <p className='md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]'> Subscribe now and enjoy exclusive savings, special deals, and early access to new collection.</p>
      <form action='' className='w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px]' onSubmit={handleSubscribe}>
        <input className='placeholder:text-[black] bg-slate-300 w-[600px] h-[40px] px-[20px] rounded-lg shadow-sm shadow-black'
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <br />
        <button type="submit" className='text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px] hover:bg-slate-500 cursor-pointer
        bg-[#2e3030c9] text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] rounded-lg shadow-sm shadow-black'>Subscribe</button>
      </form>
      {message.text && (
        <p style={{ ...styles.message, color: message.type === 'success' ? 'green' : 'red' }}>
          {message.text}
        </p>
      )}
    </div>
  );
};

export default Subscribe;
