import '../Pages/Edit.css';

function Edit () {
    return (
        <div className="edit-container">

            <main className="main edit-bg-dark">

                <section className="user-edit-content">
                    <h1>Edit user info</h1>

                <div className="user-edit-form">
                    <div class="user-input-wrapper">
                    <label for="username">User name</label>
                    <input type="text" id="username" />
                    </div>
                    <div class="user-input-wrapper">
                    <label for="username">First name</label>
                    <input type="text" id="firstname" />
                    </div>
                    <div class="user-input-wrapper">
                    <label for="username">Last name</label>
                    <input type="text" id="lastname" />
                    </div>

                    <div className="edit-buttons">
                        <a href="./user.html" class="edit-name-button">Save</a>
                        <a href="./user.html" class="edit-name-button">Cancel</a>
                    </div>
                </div>

                </section>

                <section className="user-account">
                    <div class="user-account-content-wrapper">
                    <h3 class="user-account-title">Argent Bank Checking (x8349)</h3>
                    <p class="user-account-amount">$2,082.79</p>
                    <p class="user-account-amount-description">Available Balance</p>
                    </div>
                </section>
                <section className="user-account">
                    <div class="user-account-content-wrapper">
                    <h3 class="user-account-title">Argent Bank Checking (x8349)</h3>
                    <p class="user-account-amount">$2,082.79</p>
                    <p class="user-account-amount-description">Available Balance</p>
                    </div>
                </section>
                <section className="user-account">
                    <div class="user-account-content-wrapper">
                    <h3 class="user-account-title">Argent Bank Checking (x8349)</h3>
                    <p class="user-account-amount">$2,082.79</p>
                    <p class="user-account-amount-description">Available Balance</p>
                    </div>
                </section>

            </main>

        </div>
    )
}

export default Edit