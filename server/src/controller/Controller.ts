class Controller {
  clientController() {}
  /**
   * Normalisation du retour de l'APi {code: xxxx,message:xxxxxx,data:[]}
   * @code : int
   * @message: string
   * @data: array
   **/
  normalizeJSON = (code, message, data) => {
    return { code: code, message: message, data: data };
  };
}
export default Controller;
