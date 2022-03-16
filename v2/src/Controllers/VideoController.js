const connection = require('../database/connection');

module.exports = {
  async indexHistory(req, res){
    try {
      const history = await connection('api_history')
        .select('*');
      return res.json(history);
    } catch (e) {
      console.error('Unexpected error indexing history:', e)
      return response.sendStatus(422);
    }
  }
}