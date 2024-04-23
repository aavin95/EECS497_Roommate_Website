"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from '../context/AuthContext';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 16px;
  background-color: #f0f4f8;
  background-image: url('path_to_texture.png');
  background-size: contain;
  font-family: serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: #1a73e8;
`;

const Button = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 60px;
`;

export default function Signup() {
  const { user, googleSignIn, logOut } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // router.push('/dashboard'); // Redirect to dashboard or another page after login
    }
  }, [user, router]);

  const handleGoogleAuth = async (action) => {
    try {
      const result = action === 'signin' ? await googleSignIn() : await logOut();
      router.push(action === 'signin' ? '/matches' : '/signup2');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Main>
      <Title>Personal Information</Title>
      <div>
        {user ? (
          <Button onClick={() => handleGoogleAuth('signout')}>
            Sign Out
          </Button>
        ) : (
          <>
            <Button onClick={() => handleGoogleAuth('signin')}>
              Sign in with Google
            </Button>
            <Button onClick={() => handleGoogleAuth('signup')}>
              Sign up with Google
            </Button>
          </>
        )}
      </div>
    </Main>
  );
}


// "use client";
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { UserAuth } from '../context/AuthContext'; // Adjust the path based on your file structure


// export default function Signup() {
//   const { user, googleSignIn, logOut } = UserAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       //router.push('/'); // Redirect to dashboard or another page after login
//     }
//   }, [user, router]);

//   const handleSignIn = async () => {
//     try{
//       await googleSignIn();
//       router.push('/matches');}
//     catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleSignUp = async () => {
//     try{
//       await googleSignIn();
//       router.push('/signup2');
//     }
//     catch (error) {
//       alert(error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await logOut();
//     }
//     catch (error) {
//       alert(error.message);
//     }
//   };


//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-blue-50 font-serif">
//       <h1 className="text-4xl font-bold mb-8 text-blue-500">Personal Information</h1>
//       <div className="w-full max-w-xs">
//         {user ? (
//           <button
//           onClick={handleSignOut}
//           style={{
//             backgroundColor: '#007BFF',
//             color: 'white',
//             padding: '10px 20px',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             marginLeft: '60px'
//           }}
//         >
//           Sign Out
//         </button>
//           //<button onClick={handleSignOut}>Sign out</button>
//         ) : (
//           <>
// {/* <button onClick={handleSignIn} style="background-color: #007BFF; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Sign in with Google</button>
// <button onClick={handleSignUp} style="background-color: #007BFF; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-left: 10px;">Sign up with Google</button> */}
// <button
//   onClick={handleSignIn}
//   style={{
//     backgroundColor: '#007BFF',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     marginLeft: '60px'
//   }}
// >
//   Sign in with Google
// </button>
// <button
//   onClick={handleSignUp}
//   style={{
//     backgroundColor: '#007BFF',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     marginLeft: '60px'
//   }}
// >
//   Sign up with Google
// </button>

//           </>
          
//         )}

//       </div>
//     </main>
//   );
// }


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