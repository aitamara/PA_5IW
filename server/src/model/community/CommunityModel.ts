import Model from "../Model";

let model = new Model();

class CommunityModel extends Model {
    static getCommunityByClientId = async (client_id: number) => {
        try {
          let { rows } = await model.dbClient.query(`SELECT * FROM public.community WHERE client_id = $1`, [client_id]);
          if (rows.length > 0) {
            return { code: 200, message: "succes", data: rows };
          } else {
            return { code: 404, message: "Communauté non trouvée", data: [] };
          }
        } catch (err) {
          console.error(err);
          return { code: 500, message: err, data: [] };
        }
    };

    static addClientToCommunity = async (data) => {
        const { pro_id, client_id } = data;
        try {
            let { rows } = await model.dbClient.query(`SELECT * FROM public.community WHERE client_id = $1 AND pro_id = $2`, [client_id, pro_id]);
            if (rows.length > 0) {
                if (rows[0].status){
                    return { code: 200, message: "Déjà membre", data: rows };
                }else if (rows[0].status == null){
                    this.reintroduceClientIntoCommunity(data);
                }else{
                    return { code: 200, message: "Membre bloqué de cette communauté", data: rows };
                }
            }
            else {
                try {
                    let { rows } = await model.dbClient.query(
                        `INSERT INTO public.community (pro_id, client_id) VALUES ($1,$2) RETURNING *;`,
                        [pro_id, client_id]
                    );
                    if (rows.length > 0) {
                        return { status: 200, message: "success", data: rows[0] };
                    } else {
                        return { status: 403, message: "prob : non ajouté", data: rows };
                    }
                } catch (err) {
                    return {
                        status: 500,
                        message: "Une erreur s'est produite, voir le champ data pour plus d'information.",
                        data: err,
                    };
                }
            }
        }catch (err) {
            console.error(err);
            return { code: 500, message: err, data: [] };
        }        
    };

    static fireClientFromCommunity = async (data) => {
        const { pro_id, client_id } = data;
        try {
            let { rows } = await model.dbClient.query(`UPDATE public.community SET status = false WHERE pro_id = $1 AND client_id = $2`, 
            [pro_id, client_id]);
            return { code: 200, message: "Client retiré de la communauté", data: rows };
        } catch (err) {
            console.error(err);
            return { code: 500, message: err, data: [] };
          }
    };

    static reintroduceClientIntoCommunity = async (data) => {
        const { pro_id, client_id } = data;
        try {
            let { rows } = await model.dbClient.query(`UPDATE public.community SET status = true WHERE pro_id = $1 AND client_id = $2`, 
            [pro_id, client_id]);
            return { code: 200, message: "succes", data: rows };
        } catch (err) {
            console.error(err);
            return { code: 500, message: err, data: [] };
          }
    };

    static leaveCommunity = async (data) => {
        const { pro_id, client_id } = data;
        try {
            let { rows } = await model.dbClient.query(`UPDATE public.community SET status = null WHERE pro_id = $1 AND client_id = $2`, 
            [pro_id, client_id]);
            return { code: 200, message: "succes", data: rows };
        } catch (err) {
            console.error(err);
            return { code: 500, message: err, data: [] };
          }
    };

    static getCommunitiesByClientId = async (client_id: number) => {
        try {
          let { rows } = await model.dbClient.query(`SELECT * FROM public.community WHERE client_id = $1`, [client_id]);
          if (rows.length > 0) {
            return { code: 200, message: "succes", data: rows };
          } else {
            return { code: 404, message: "Aucune communauté trouvée pour ce client", data: [] };
          }
        } catch (err) {
          console.error(err);
          return { code: 500, message: err, data: [] };
        }
    };

    static getCommunitiyMembersByProId = async (pro_id: number) => {
        try {
          let { rows } = await model.dbClient.query(`SELECT client_id FROM public.community WHERE pro_id = $1`, [pro_id]);
          if (rows.length > 0) {
            return { code: 200, message: "succes", data: rows };
          } else {
            return { code: 404, message: "Aucune membre de cette communauté", data: [] };
          }
        } catch (err) {
          console.error(err);
          return { code: 500, message: err, data: [] };
        }
    };
}
export default CommunityModel;