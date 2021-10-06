import React from "react";

// Styles
import { Wrapper, Content } from "./MovieInfoBar.style";

// Helpers
import { calcTime } from "../../helpers/calcTime";
import { convertMoney } from "../../helpers/convertMoney";

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Runnig time :{calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Budget :{convertMoney(budget)}</p>
        </div>
        <div className="column">
          <p>Revenue :{convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
}

export default MovieInfoBar;
