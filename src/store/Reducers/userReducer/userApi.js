// fonction de l'appel API pour se connecter

export async function loginUser({ email, password }) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Réponse API :', data.body);

    if (response.ok) {
      return { success: true, data: data.body };
    } else {
      console.error('Échec de la connexion :', data.message);
      return { success: false, error: data.message };
    }
  } catch (error) {
    console.error('Erreur réseau :', error);
    return { success: false, error };
  }
}

// fonction de l'appel API pour récupérer les données utilisateur

export async function fetchUserProfile(token) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('Données utilisateur :', data.body);

    if (response.ok) {
      return { success: true, data: data.body };
    } else {
      console.error('Erreur chargement profil :', data.message);
      return { success: false, error: data.message };
    }
  } catch (error) {
    console.error('Erreur réseau :', error);
    return { success: false, error };
  }
}