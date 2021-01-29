import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Home.css";

const Home = () => {
  const history = useHistory();

	const newList = () => {
		
	}

  return (
    <>
      <div className="Home">
        <h1>TASK . IO</h1>
        <div className="action-button">
          <Button
            onClick={newList}
            variant="contained"
            color="primary"
            disableElevation
            size="large"
          >
            New Task List
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
