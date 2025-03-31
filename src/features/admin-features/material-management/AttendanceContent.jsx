import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 20rem;
    height: 7rem;
    border: 2px solid black;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 2rem !important;
      font-weight: bold;
    }
  }
`;
const QRContainer = styled.div`
  width: 65rem;
  height: 65rem;
  background: transparent;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 3rem;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3rem;
  }
`;

const AttendanceContent = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchQRCode(data) {
    setLoading(true);
    try {
      const baseUrl = "https://api.qrserver.com/v1/create-qr-code/";
      const size = "150x150";
      const url = `${baseUrl}?size=${size}&data=${encodeURIComponent(data)}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch QR code");
      }

      const blob = await response.blob();
      const qrImageUrl = URL.createObjectURL(blob);

      setQrCodeUrl(qrImageUrl);
    } catch (error) {
      console.error("Error fetching QR code:", error);
    }
    setLoading(false);
  }

  const handleGenerate = async () => {
    if (!inputData) return;
    await fetchQRCode(inputData);
  };
  return (
    <Container>
      <Information>
        <div>
          <p>عدد الطلاب : 255</p>
        </div>
        <div>
          <p>Timer</p>
        </div>
      </Information>

      {qrCodeUrl && (
        <QRContainer>
          <img src={qrCodeUrl} alt="Fetched QR Code" />
        </QRContainer>
      )}
      <input
        type="text"
        placeholder="Enter text for QR code"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleGenerate}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          background: "#30bd58",
          color: "#fff",
          border: "none",
        }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch QR Code"}
      </button>
    </Container>
  );
};

export default AttendanceContent;
