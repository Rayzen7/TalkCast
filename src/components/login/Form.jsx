import { useState, useEffect } from 'react';
import bg from '/img/login.png';
import btn from '/img/buttonLogin.png';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('email', 'test@gmail.com');
    localStorage.setItem('password', '123');
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful');
      window.location.href = '/';
    } else {
      setError('Email or password is incorrect');
    }
  };

  return (
    <div className='w-full h-screen object-cover bg-cover flex justify-center items-center flex-col'
      style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <div className='bg-white lg:w-[550px] lg:h-[480px] w-[310px] h-[480px] flex flex-col justify-between items-center rounded-xl py-8'>
          <form onSubmit={handleLogin}>
            <h1 className='font-poppins text-center text-[30px]'>Masuk Akun</h1>
            <p className='text-center font-poppins text-[12px]'>Tidak ada akun <span className='text-blue cursor-pointer'>Buat Akun</span></p>
            <div className='mt-12 font-poppins1'>
              <input
                type="text"
                className='outline-none border-none lg:w-[450px] w-[270px] h-[30px] text-[14px]'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
              <div className='bg-black lg:w-[450px] w-[270px] h-[2px]'></div>
              <input
                type="password"
                className='outline-none border-none lg:w-[450px] w-[270px] h-[30px] text-[14px] mt-9'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
              <div className='bg-black lg:w-[450px] w-[270px] h-[2px]'></div>
              <div className='text-[13px] flex justify-between items-center mt-4 font-poppins'>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" name="" id="" />
                  <p>Ingatkan Saya</p>
                </div>
                <p className='text-blue cursor-pointer'>Lupa sandi?</p>
              </div>
            </div>
            <button type="submit" className='mx-auto block'>
              <img src={btn} alt="Login Button" className='w-[110px] h-auto mt-16 mx-auto hover:scale-90 transition-all duration-300' />
            </button>
            {error && <p className='text-red-500 text-[14px] text-center mt-6 font-poppins'>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;
