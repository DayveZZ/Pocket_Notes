import bgPreview from "../assets/image-removebg-preview 1.svg";

export default function RightPanel() {
  return (
    <div className="rightBox">
      <img src={bgPreview} alt="illustration" />
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online. <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
      </p>
      <div className="footerText">
        <span>🔒</span> end-to-end encrypted
      </div>
    </div>
  );
}
