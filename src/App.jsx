import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
// import TripList from "./component/tripList";
// import { Homepage } from "./foodApp/Home";
import Modal from "./Modal/Modal";
const App = () => {
  const [showModal, setShowModal] = useState(false);

  // function to show modal after three seconds of page loads
  const displayModal = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  };

  useEffect(() => {
    displayModal();
  }, []);
  return (
    <div>
      <h1>Hello world</h1>
      <p>center cold </p>
      {/* To add a button to show the modal */}
      {/* {!showModal && <button onClick={() => setShowModal(true)}>Login</button>} */}

      {showModal && (
        <Modal hideShowModal={() => setShowModal(false)}>
          <h1>Buy my React course today reduced at 50%</h1>
          <p>Whata are you waiting for, get now!</p>
        </Modal>
      )}
    </div>
  );
};
export default App;
