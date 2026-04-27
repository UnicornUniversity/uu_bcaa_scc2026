import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [darkBackground, setDarkBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  console.log(time, " - ", darkBackground);

  return (
    <div
      style={{
        backgroundColor: darkBackground ? "black" : "white",
        color: darkBackground ? "white" : "black",
        padding: "8px",
        margin: "8px",
      }}
    >
      {time}
      <Button
        onClick={() => {
          setDarkBackground((current) => !current);
        }}
        variant={"success"}
      >
        <Icon
          path={darkBackground ? mdiWhiteBalanceSunny : mdiWeatherNight}
          title="User Profile"
          size={1}
        />
      </Button>
    </div>
  );
}

export default Clock;
