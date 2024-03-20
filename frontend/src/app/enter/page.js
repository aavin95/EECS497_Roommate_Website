"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from '../context/AuthContext'; // Adjust the path based on your file structure


export default function Signup() {
  const { user, googleSignIn, logOut } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      //router.push('/'); // Redirect to dashboard or another page after login
    }
  }, [user, router]);

  const handleSignIn = async () => {
    try{
      await googleSignIn();
      router.push('/matches');}
    catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = async () => {
    try{
      await googleSignIn();
      router.push('/signup2');
    }
    catch (error) {
      alert(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    }
    catch (error) {
      alert(error.message);
    }
  };


  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-50 font-serif">
      <h1 className="text-4xl font-bold mb-8 text-blue-500">Personal Information</h1>
      <div className="w-full max-w-xs">
        {user ? (
          <button
          onClick={handleSignOut}
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginLeft: '60px'
          }}
        >
          Sign Out
        </button>
          //<button onClick={handleSignOut}>Sign out</button>
        ) : (
          <>
{/* <button onClick={handleSignIn} style="background-color: #007BFF; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Sign in with Google</button>
<button onClick={handleSignUp} style="background-color: #007BFF; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-left: 10px;">Sign up with Google</button> */}
<button
  onClick={handleSignIn}
  style={{
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '60px'
  }}
>
  Sign in with Google
</button>
<button
  onClick={handleSignUp}
  style={{
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '60px'
  }}
>
  Sign up with Google
</button>

          </>
          
        )}

      </div>
    </main>
  );
}


        {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <section className="my-8">
        <Link href="/signup2" passHref>
          <button className="px-9 py-2 text-xl font-semibold text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
            Continue Signup
          </button>
        </Link>
      </section>
        </form> */}