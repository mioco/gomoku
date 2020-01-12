const role = {
    black: 1,
    white: 2,
    empty: 0,
    reverse: function(r) {
      return r == role.black ? role.white : role.black;
    }
}

export default role;
  