/*async function userLogin(params) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    const data = await response.json(); // ✅ lire le body une seule fois
    console.log("Réponse brute du serveur :", data); // utile pour debug

  const token = data.body?.token;

    if (!token) {
      console.log("Erreur d'authentification");
      return null;
    }

    return { token };
    } catch (error) {
        console.error("Erreur serveur :", error);
        return null;
    }


}

export default userLogin 
async function userLogin(params) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    console.log("Réponse brute du serveur :", data);
    console.log("Contenu de data.body :", data.body);

    const token = data.body?.token;
    const user = data.body?.user || { email: params.email }; // ✅ fallback si user absent

    if (!token) {
      console.log("Erreur d'authentification : token manquant");
      return null;
    }

    return { token, user };
  } catch (error) {
    console.error("Erreur serveur :", error);
    return null;
  }
}

export default userLogin; */