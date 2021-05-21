export function list(req, res){
  res.json([]);
}

export function create(req, res){
  res.send("Ok (created)");
}

export function read(req, res){
  res.json({nama: 'Jamal Fazlur', umur: 28});
}

export function update(req, res){
  res.send("Ok (updated)");
}

export function deleteUser(req, res){
  res.send("Ok (deleted)");
}
