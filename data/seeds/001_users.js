exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
  await knex("users").insert([
    { id: 1, username: "username1", password: "password1" },
    { id: 2, username: "username2", password: "password2" },
    { id: 3, username: "username3", password: "password3" }
  ]);
};
