const getAdmins = (map) => {
  let admins = [];

  for ([nome, value] of map) {
    if (value === "ADMIN") {
      admins.push(nome);
    }
  }

  return admins;
};

const adminUsers = new Map();

adminUsers.set("Maria", "USER");
adminUsers.set("Marcelo", "ADMIN");
adminUsers.set("Calos", "USER");
adminUsers.set("Brenda", "ADMIN");
adminUsers.set("Pedro", "ADMIN");

console.log(getAdmins(adminUsers));
