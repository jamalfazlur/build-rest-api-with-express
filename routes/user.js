export function list(req, res){
  const { sort } = req.query;
  console.log({sort});
  res.json([]);
}

export function create(req, res){
  const { nama, umur } = req.body;
  console.log(`User ${nama} yg berumur ${umur} segera dibuat.`);
  res.send("Ok (created)");
}

export function read(req, res){
  const { id } = req.params; 
  res.json({id, nama: 'Jamal Fazlur', umur: 28});
}

export function update(req, res){
  const { id } = req.params;
  const { nama, umur } = req.body;
  console.log(`Updating ${id}, dengan nama ${nama} & umur ${umur}`);
  res.send("Ok (updated)");
}

export function deleteUser(req, res){
  const { id } = req.params;
  console.log(`Deleting ${id}`);
  res.send("Ok (deleted)");
}
