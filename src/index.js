let position = document.querySelector("#default-position");

let up_move = document.querySelector("#move-up"),
  left_move = document.querySelector("#move-left"),
  down_move = document.querySelector("#move-down"),
  right_move = document.querySelector("#move-right"),
  moves = document.querySelectorAll(".moves");

position.addEventListener("change", el => {
  el.target.classList.remove(el.target.classList.value);
  el.target.classList.add(el.target.value);
});

moves.forEach(el =>
  el.addEventListener("change", function() {
    move_position(position, {
      top: up_move.value,
      bottom: down_move.value,
      left: left_move.value,
      right: right_move.value
    });
  })
);

moves.forEach(el => el.addEventListener("change", () => console.log(el.value)));

function move_position(element, arr) {
  if (arr.top !== "") element.style.top = arr.top + "px";
  else element.style.top = null;

  if (arr.bottom !== "") element.style.bottom = arr.bottom + "px";
  else element.style.bottom = null;

  if (arr.left !== "") element.style.left = arr.left + "px";
  else element.style.left = null;

  if (arr.right !== "") element.style.right = arr.right + "px";
  else element.style.right = null;
}
