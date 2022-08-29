import { Match } from "src/entity/Match";
import Model from "../Model";

let model = new Model();

class MatchsModel extends Model {
    static getMatch = async (obj) => {
        const { client1_id, client2_id, pro_id, status } = obj;
        let code = 500,
        message = "erreur",
        data:Match[] = [];

        try{
            code = 200;
            message = "Aucun match trouvé";

            let { rows } = await model.dbClient.query(`SELECT * FROM public.matchs WHERE client1_id = $2 AND client2_id = $1 AND pro_id = $3`, [client1_id, client2_id, pro_id]);
            if (rows.length > 0) {
                data.push(new Match(rows.client1_id, rows.client2_id, rows.pro_id,rows.status ));
                message = "Match trouvé";
            }
            return { code: code, message: message, data: data };
        } catch (err) {
          console.error(err);
          return { code: 500, message: err, data: [] };
        }
    }

    /*static createOrUpdateMatch = async (data) => {
        const { client1_id, client2_id, pro_id, status } = data;
                await model.dbClient.query(`UPDATE public.matchs SET status = $1 WHERE id = $2`, [status, rows[0].id]);
                return {code: 200, message: "match mis à jour"}


            let stat;
            if(status == 'like') {
                stat = 'waiting';
            }else{
                stat = status;
            }
            let { rows } = await model.dbClient.query(
                `INSERT INTO public.matchs (client1_id, client2_id, pro_id, status) VALUES ($1,$2,$3,$4) RETURNING *;`,
                [client1_id, client2_id, pro_id, stat]
            );
            return { code: 200, message: "match créée", data: rows }; 
    };*/

    static createMatch = async (obj: Match) => {
        let code = 500,
        message = "erreur",
        data = [];
        
        try{
            code = 200;
            message = "Match créé";
            let { rows } = await model.dbClient.query(
                `INSERT INTO public.matchs (client1_id, client2_id, pro_id, status) VALUES ($1,$2,$3,$4) RETURNING *;`,
                [obj.idC1, obj.idC2, obj.idP, obj.getStatus]
            );
            data = rows;
            return { code: code, message: message, data: rows };
        } catch (err) {
          console.error(err);
          return { code: 500, message: err, data: [] };
        }
    }

    static updateMatch = async (obj: Match) => {
        let code = 500,
        message = "erreur",
        data = [];

        try{
            code = 200;
            message = "Match mis à jous";
            let { rows } = await model.dbClient.query(
                await model.dbClient.query(`UPDATE public.matchs SET status = $1 WHERE id = $2`, [status, rows[0].id]);
            );
            data = rows;
            return { code: code, message: message, data: rows };
        } catch (err) {
          console.error(err);
          return { code: 500, message: err, data: [] };
        }
    }
}
export default MatchsModel;
