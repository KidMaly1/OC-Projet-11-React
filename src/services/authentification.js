async function userLogin(params) {
    try {
         const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(params),
        });

        if(response.ok) {
            console.log("Erreur d'authentification");
        } else {
            return await response.json();
        }
    } catch (error) {
        console.error("Erreur serveur :", error);
        return null;
    }
}

export default userLogin