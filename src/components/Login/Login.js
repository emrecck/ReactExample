import React, { useState } from 'react'

const USERNAME = "emrecckx";
const PASSWORD = "123456"

const Login = ({ isShowMain, setShowMain }) => {
    const [countOfLogin, incCount] = useState(0);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        if (countOfLogin > 2) {
            alert("3 kere yanlış giriş yaptınız. Lütfen şifrenizi yenileyiniz.");
            return;
        }

        if (username === USERNAME && password === PASSWORD) {
            alert("Giriş Başarılı");
            setShowMain(true);
        } else {
            alert("Hatalı Giriş Yaptınız !")
            incCount(countOfLogin + 1)
        }
    }

    return (
        <>
            <div className='w-full p-20 flex justify-center'>
                <div className='w-1/4 shadow-2xl p-10'>
                    <h1 className='text-3xl mb-4 '>LOGIN</h1>
                    <div className='flex-row mb-4'>
                        <input className='block w-full h-10 bg-gray-100 rounded mb-4 p-3' type="text" name="username" placeholder='username' value={username} onChange={(e) => { setUserName(e.target.value) }} />
                        <input className='block w-full h-10 bg-gray-100 rounded p-3' type="password" name="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button className='bg-green-700 text-white text-lg text-center w-full py-3 rounded' type="submit" onClick={login}>Login</button>
                </div>

            </div>
        </>
    )
}

export default Login