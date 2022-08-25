import Model from "../Model";

let model = new Model();

class ClientModel extends Model {
  static authenticate = async (client_email: string, client_password: string) => {
    try {
      client_password = model.hashIt(client_password);
      let { rows } = await model.dbClient.query(`SELECT * FROM public.user_auth WHERE email = $1 AND password = $2`, [
        client_email,
        client_password,
      ]);
      if (rows.length > 0) {
        return { code: 200, message: "succes", data: rows };
      } else {
        return { code: 404, message: "Utilisateur non trouvé", data: [client_email, client_password] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };

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

  static getClientByUserName = async function (client_username) {
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
  static registerAuthDetails = async function (body_params) {
    const { email, password } = body_params;
    try {
      let { rows } = await model.dbClient.query(
        `INSERT INTO public.user_auth (email,password,role) VALUES ($1,$2,$3) RETURNING *;`,
        [email, model.hashIt(password), "client"]
      );
      if (rows.length > 0) {
        return { status: 200, message: "success", data: rows[0] };
      } else {
        return { status: 403, message: "La clé existe déjà", data: rows };
      }
    } catch (err) {
      return {
        status: 500,
        message: "Une erreur s'est produite, voir le champ data pour plus d'information.",
        data: err,
      };
    }
  };

  //a retester suite aux modifs
  static registerClient = async function (body_params) {
    const { status, message, data } = await ClientModel.registerAuthDetails(body_params);
    const { lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by} = body_params;

    if (status !== 200 || typeof data.id === undefined) return { code: status, message: message, data: data };

    try {
      let { rows } = await model.dbClient.query(
        `INSERT INTO public.user_client (user_id, lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *;`,
        [data.id, lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by]
      );
      if (rows.length > 0) {
        return { code: 200, message: message, data: rows };
      } else {
        return { code: 404, message: message, data: rows };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  };
}
export default ClientModel;
