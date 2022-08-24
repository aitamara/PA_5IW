import Model from "../Model";

let model = new Model();

class ClientModel extends Model {
  static getClientById = async (client_id: number) => {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.user_client WHERE id = $1`, [client_id]);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Utilisateur non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

  getClientByUserName = async function (client_username) {
    try {
      let { rows } = await model.dbClient.query(`SELECT * FROM public.user_client WHERE lastname LIKE $1`, [
        client_username,
      ]);
      if (rows.length > 0) {
        return { code: 200, message: "success", data: rows };
      } else {
        return { code: 404, message: "Utilisateur non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

  //a retester suite aux modifs
  registerClient = async function (body_params) {
    const { lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, user_id } = body_params;

    try {
      /*
      let { rows } = await model.dbClient.query(
        `INSERT INTO public.user_client (user_id, lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`,
        [
          user_id,
          lastname,
          firstname,
          photo,
          birthdate,
          phone,
          address,
          city,
          zipcode,
          gender,
        ]
      );
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Utilisateur non enregistré", data: [] };
      }
    */
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
}
export default ClientModel;
