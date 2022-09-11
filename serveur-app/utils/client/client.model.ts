import Model from "../../model/Model";
import Client from "../entity/Client";
import ClientAuth from "../entity/UserAuth";

export default class ClientModel extends Model {
  private table: string = "user_client";
  private model = new Model();

  /**
   * Récupération d'un client à l'aide de l'id
   *
   * @param client_id
   * @returns
   */
  getClientById = async (client_id: number) => {
    try {
      let arrClient: Array<Client> = [],
        client: Client,
        { rows } = await this.model.dbClient.query(`SELECT * FROM public.${this.table} WHERE id = $1`, [client_id]);
      if (rows.length > 0) {
        rows.forEach((e) => {
          client = new Client(e.id, e.lastname, e.firstname, e.photo, e.birthdate, e.phone, e.adress, e.city, e.zipcode, e.gender, e.here_for, e.intrested_by);
          arrClient.push(client);
        });
        return { success: true, message: "succes", data: arrClient };
      } else {
        return { success: false, message: "Pro non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /**
   * Récupération d'un client à l'aide du mail
   *
   * @param client_id
   * @returns
   */
  getClientByMail = async (mail: string) => {
    try {
      let arrClient: Array<Client> = [],
        client: Client,
        { rows } = await this.model.dbClient.query(`SELECT * FROM public.user_auth WHERE email = $1`, [mail]);
      if (rows.length > 0) {
        rows.forEach((e) => {
          client = new Client(e.id, e.lastname, e.firstname, e.photo, e.birthdate, e.phone, e.adress, e.city, e.zipcode, e.gender, e.here_for, e.intrested_by);
          arrClient.push(client);
        });
        return { success: true, message: "succes", data: arrClient };
      } else {
        return { success: false, message: "Pro non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  getClientsOfCommunity = async (id_community: number) => {
    try {
      //table de jonction entre community et user
      let { rows } = await this.model.dbClient.query(`SELECT * FROM user_comminty WHERE id_community = $1`, [id_community]);
      if (rows.length > 0) {
        return { success: true, message: "succes", data: rows };
      } else {
        return { success: false, message: "Aucun utilisateurs trouvés", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };

  /* getClientByUserName = async (client_username) => {
    try {
      let { rows } = await this.model.dbClient.query(`SELECT * FROM public.user_client WHERE lastname LIKE $1`, [client_username]);
      if (rows.length > 0) {
        return { code: 200, message: "success", data: rows };
      } else {
        return { code: 404, message: "Utilisateur non trouvé", data: [] };
      }
    } catch (err) {
      console.error(err);
      return { code: 500, message: err, data: [] };
    }
  }; */

  //a retester suite aux modifs
  registerAuthDetails = async (body_params) => {
    const { email, password } = body_params;
    try {
      let { rows } = await this.model.dbClient.query(`INSERT INTO public.user_auth (email,password,role) VALUES ($1,$2,$3) RETURNING *;`, [
        email,
        this.model.hashIt(password),
        "client",
      ]);
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
  registerClient = async (body_params) => {
    const { status, message, data } = await this.registerAuthDetails(body_params);
    const { lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by } = body_params;

    if (status !== 200 || typeof data.id === undefined) return { code: status, message: message, data: data };

    try {
      let { rows } = await this.model.dbClient.query(
        `INSERT INTO public.user_client (user_id, lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *;`,
        [data.id, lastname, firstname, photo, birthdate, phone, address, city, zipcode, gender, here_for, intrested_by]
      );
      if (rows.length > 0) {
        return { success: true, message: message, data: rows };
      } else {
        return { success: false, message: message, data: rows };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err, data: [] };
    }
  };
}
