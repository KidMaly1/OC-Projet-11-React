import './Edit.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../store/Reducers/userReducer/userThunks'; // action Redux pour le changement de userName


function Edit () {

 const dispatch = useDispatch();
 const token = useSelector((state) => state.auth.token);
 const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState(user?.userName || '');
  const [firstName] = useState(user?.firstName || '');
  const [lastName] = useState(user?.lastName || '');

  const handleSave = (e) => {
    e.preventDefault();
    if (username.trim() && token) {
        dispatch(updateUserName(token, username));
    }
    };

    return (
        <div className="edit-container">

            <main className="main edit-bg-dark">

                <section className="user-edit-content">
                    <h1>Edit user info</h1>

                <form className="user-edit-form">
                    <div className="user-input-wrapper">
                    <label htmlFor="username">User name</label>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" id="username" />
                    </div>
                    <div className="user-input-wrapper">
                    <label htmlFor="username">First name</label>
                    <input type="text" id="firstname" value={firstName} disabled />
                    </div>
                    <div className="user-input-wrapper">
                    <label htmlFor="username">Last name</label>
                    <input type="text" id="lastname" value={lastName} disabled />
                    </div>

                    <div className="edit-buttons">
                        <button onClick={handleSave} className="edit-name-button">Save</button>
                        <button onClick={() => setUsername(user?.userName || '')} className="edit-name-button">Cancel</button>
                    </div>
                </form>

                </section>

                <section className="user-account">
                    <div className="user-account-content-wrapper">
                    <h3 className="user-account-title">Argent Bank Checking (x8349)</h3>
                    <p className="user-account-amount">$2,082.79</p>
                    <p className="user-account-amount-description">Available Balance</p>
                    </div>
                </section>
                <section className="user-account">
                    <div className="user-account-content-wrapper">
                    <h3 className="user-account-title">Argent Bank Checking (x8349)</h3>
                    <p className="user-account-amount">$2,082.79</p>
                    <p className="user-account-amount-description">Available Balance</p>
                    </div>
                </section>
                <section className="user-account">
                    <div className="user-account-content-wrapper">
                    <h3 className="user-account-title">Argent Bank Checking (x8349)</h3>
                    <p className="user-account-amount">$2,082.79</p>
                    <p className="user-account-amount-description">Available Balance</p>
                    </div>
                </section>

            </main>

        </div>
    )
}

export default Edit