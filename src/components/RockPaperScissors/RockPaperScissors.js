import React from "react";

const RockPaperScissors = () => {
  return (
    <div>
      <div id="hands">
        <div class="hand" id="computer-hand">
          <div class="fist"></div>
          <div class="finger finger-1"></div>
          <div class="finger finger-2"></div>
          <div class="finger finger-3"></div>
          <div class="finger finger-4"></div>
          <div class="thumb"></div>
          <div class="arm"></div>
        </div>

        <div class="hand" id="user-hand">
          <div class="fist"></div>
          <div class="finger finger-1"></div>
          <div class="finger finger-2"></div>
          <div class="finger finger-3"></div>
          <div class="finger finger-4"></div>
          <div class="thumb"></div>
          <div class="arm"></div>
        </div>
      </div>
      <div id="symbol">
        <div>
          <label for="rock-rock">✊</label>
          <label for="paper-rock">✊</label>
          <label for="scissors-rock">✊</label>
        </div>
        <div>
          <label for="rock-paper">🖐️</label>
          <label for="paper-paper">🖐️</label>
          <label for="scissors-paper">🖐️</label>
        </div>
        <div>
          <label for="rock-scissors">✌</label>
          <label for="paper-scissors">✌</label>
          <label for="scissors-scissors">✌</label>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
