import React, { useEffect, useState } from 'react';
import userLogin from '../services/authentification'; // adapte le chemin si besoin

function TestAPI() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const testLogin = async () => {
      const response = await userLogin({
        email: 'steve@gmail.com',
        password: 'password456',
      });

      if (response) {
        console.log('✅ Données reçues du backend :', response);
        setUserData(response);
      } else {
        console.log('❌ Échec de la connexion ou erreur réseau');
      }
    };

    testLogin();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test API</h2>
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>Connexion en cours ou erreur…</p>
      )}
    </div>
  );
}

export default TestAPI;