import React, { useState, useEffect } from "react";
import SidebarUser from "./Sidebar";

function OffreUser({ search }) {
  const [offres, setOffres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3300/api/v1/job/get-job")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.jobs)) {
          setOffres(data.jobs);
        } else {
          throw new Error("La réponse de l'API n'est pas valide.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des offres :", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center my-5">Chargement des offres...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">Erreur : {error}</div>;
  }

  const normalizedSearch = typeof search === "string" ? search.toLowerCase() : "";

  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#f8f9fa", borderRight: "1px solid #ddd" }}>
        <SidebarUser />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ overflowY: "auto" }}>
        <h2 className="text-center mb-4">Liste des Offres</h2>
        <div className="row">
          {Array.isArray(offres) && offres.length > 0 ? (
            offres
              .filter((e) => e.company && e.company.toLowerCase().includes(normalizedSearch))
              .map((e, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        {e.company || "Nom de l'entreprise indisponible"}
                      </h5>
                      <p className="card-text">
                        <strong>Position:</strong> {e.position || "Non spécifiée"}
                      </p>
                      <p className="card-text">
                        <strong>Status:</strong> {e.status || "Non spécifié"}
                      </p>
                      <p className="card-text">
                        <strong>Location:</strong> {e.workLocation || "Non spécifiée"}
                      </p>
                      <button className="btn btn-primary w-100 mt-3">
                        Postuler
                      </button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center col-12">Aucune offre trouvée.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OffreUser;
