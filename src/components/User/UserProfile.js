// import React, { useState, useEffect } from 'react';
// import { getUserProfile, updateUserProfile } from '../../api/user';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({});
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getUserProfile(token);
//         setUser(response.data);
//         setForm(response.data);
//       } catch (error) {
//         console.log('Error fetching user profile', error);
//       }
//     };
//     fetchData();
//   }, [token]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile(token, form);
//       alert('Profile updated');
//     } catch (error) {
//       console.log('Error updating profile', error);
//     }
//   };

//   if (!user) return <p>Loading...</p>;

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>First Name:</label>
//         <input
//           type="text"
//           value={form.first_name}
//           onChange={(e) => setForm({ ...form, first_name: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Last Name:</label>
//         <input
//           type="text"
//           value={form.last_name}
//           onChange={(e) => setForm({ ...form, last_name: e.target.value })}
//         />
//       </div>
//       <button type="submit">Update Profile</button>
//     </form>
//   );
// };

// export default UserProfile;
