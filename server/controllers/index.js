const fs = require('fs');

class Controller {
  static getNilai (req, res) {
    const data = fs.readFileSync('data.json', 'utf8');
    const result = JSON.parse(data);

    res.json(result);
  }

  static setNilai (req, res) {
    const data = fs.readFileSync('data.json', 'utf8');
    let result = JSON.parse(data);
    const payload = req.body;
    result = payload.nilai;

    fs.writeFileSync('data.json', JSON.stringify(result), 'utf8');

    res.json(result);
  }
  
}

module.exports = Controller;