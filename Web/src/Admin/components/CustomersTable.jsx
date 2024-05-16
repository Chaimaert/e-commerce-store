import React from "react";

const CustomersTable = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Liste des Clients</h1>
      <br /> 
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>First Name</th>
            <th style={headerCellStyle}>Last Name</th>
            <th style={headerCellStyle}>Email</th>
            <th style={headerCellStyle}>Phone</th>
            <th style={headerCellStyle}>Address</th>
            <th style={headerCellStyle}>City</th>
            <th style={headerCellStyle}>ZIP Code</th>
            <th style={headerCellStyle}>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>Latifa</td>
            <td style={cellStyle}>Smith</td>
            <td style={cellStyle}>latifa@example.com</td>
            <td style={cellStyle}>123-456-7890</td>
            <td style={cellStyle}>123 Main St</td>
            <td style={cellStyle}>Agadir</td>
            <td style={cellStyle}>10001</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Souad</td>
            <td style={cellStyle}>Slimani</td>
            <td style={cellStyle}>Souad@example.com</td>
            <td style={cellStyle}>123-456-7890</td>
            <td style={cellStyle}>123 guigou </td>
            <td style={cellStyle}>Fes</td>
            <td style={cellStyle}>10001</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Chaimae</td>
            <td style={cellStyle}>Johnson</td>
            <td style={cellStyle}>chaimae@example.com</td>
            <td style={cellStyle}>456-789-0123</td>
            <td style={cellStyle}>456 Elm St</td>
            <td style={cellStyle}>Tanger</td>
            <td style={cellStyle}>90001</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Nihal</td>
            <td style={cellStyle}>Brown</td>
            <td style={cellStyle}>nihal@example.com</td>
            <td style={cellStyle}>789-012-3456</td>
            <td style={cellStyle}>789 Oak St</td>
            <td style={cellStyle}>SMARA</td>
            <td style={cellStyle}>60601</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Nouhayla</td>
            <td style={cellStyle}>Taylor</td>
            <td style={cellStyle}>nouhayla@example.com</td>
            <td style={cellStyle}>012-345-6789</td>
            <td style={cellStyle}>012 Pine St</td>
            <td style={cellStyle}>IFRANE</td>
            <td style={cellStyle}>77001</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          {/* Ajout d'autres lignes */}
          <tr>
            <td style={cellStyle}>Ali</td>
            <td style={cellStyle}>Ali</td>
            <td style={cellStyle}>ali@example.com</td>
            <td style={cellStyle}>111-222-3333</td>
            <td style={cellStyle}>789 Maple St</td>
            <td style={cellStyle}>Rabat</td>
            <td style={cellStyle}>10020</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Fatima</td>
            <td style={cellStyle}>Fatima</td>
            <td style={cellStyle}>fatima@example.com</td>
            <td style={cellStyle}>444-555-6666</td>
            <td style={cellStyle}>456 Oak St</td>
            <td style={cellStyle}>Casablanca</td>
            <td style={cellStyle}>20030</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Nezha</td>
            <td style={cellStyle}>Nezha</td>
            <td style={cellStyle}>nezha@example.com</td>
            <td style={cellStyle}>777-888-9999</td>
            <td style={cellStyle}>321 Elm St</td>
            <td style={cellStyle}>Tangier</td>
            <td style={cellStyle}>30040</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Nouhayla</td>
            <td style={cellStyle}>Taylor</td>
            <td style={cellStyle}>nouhayla@example.com</td>
            <td style={cellStyle}>012-345-6789</td>
            <td style={cellStyle}>012 Pine St</td>
            <td style={cellStyle}>IFRANE</td>
            <td style={cellStyle}>77001</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          {/* Ajout d'autres lignes */}
          <tr>
            <td style={cellStyle}>Ali</td>
            <td style={cellStyle}>Ali</td>
            <td style={cellStyle}>ali@example.com</td>
            <td style={cellStyle}>111-222-3333</td>
            <td style={cellStyle}>789 Maple St</td>
            <td style={cellStyle}>Rabat</td>
            <td style={cellStyle}>10020</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Fatima</td>
            <td style={cellStyle}>Fatima</td>
            <td style={cellStyle}>fatima@example.com</td>
            <td style={cellStyle}>444-555-6666</td>
            <td style={cellStyle}>456 Oak St</td>
            <td style={cellStyle}>Casablanca</td>
            <td style={cellStyle}>20030</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Nezha</td>
            <td style={cellStyle}>Nezha</td>
            <td style={cellStyle}>nezha@example.com</td>
            <td style={cellStyle}>777-888-9999</td>
            <td style={cellStyle}>321 Elm St</td>
            <td style={cellStyle}>Tangier</td>
            <td style={cellStyle}>30040</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Nouhayla</td>
            <td style={cellStyle}>Taylor</td>
            <td style={cellStyle}>nouhayla@example.com</td>
            <td style={cellStyle}>012-345-6789</td>
            <td style={cellStyle}>012 Pine St</td>
            <td style={cellStyle}>IFRANE</td>
            <td style={cellStyle}>77001</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          {/* Ajout d'autres lignes */}
          <tr>
            <td style={cellStyle}>Ali</td>
            <td style={cellStyle}>Ali</td>
            <td style={cellStyle}>ali@example.com</td>
            <td style={cellStyle}>111-222-3333</td>
            <td style={cellStyle}>789 Maple St</td>
            <td style={cellStyle}>Rabat</td>
            <td style={cellStyle}>10020</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Fatima</td>
            <td style={cellStyle}>Fatima</td>
            <td style={cellStyle}>fatima@example.com</td>
            <td style={cellStyle}>444-555-6666</td>
            <td style={cellStyle}>456 Oak St</td>
            <td style={cellStyle}>Casablanca</td>
            <td style={cellStyle}>20030</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
          <tr>
            <td style={cellStyle}>Nezha</td>
            <td style={cellStyle}>Nezha</td>
            <td style={cellStyle}>nezha@example.com</td>
            <td style={cellStyle}>777-888-9999</td>
            <td style={cellStyle}>321 Elm St</td>
            <td style={cellStyle}>Tangier</td>
            <td style={cellStyle}>30040</td>
            <td style={cellStyle}>MAROC</td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const titleStyle = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "32px", // Taille de police plus grande
};

const tableStyle = {
  width: "90%",
  borderCollapse: "collapse",
};

const headerCellStyle = {
  padding: "15px",
  border: "2px solid #dddddd",
  textAlign: "left",
  backgroundColor: "#ffe0f0", // Rose clair
  fontStyle: "italic",
};

const cellStyle = {
  padding: "15px",
  border: "2px solid #dddddd",
  fontStyle: "italic",
};

export default CustomersTable;
