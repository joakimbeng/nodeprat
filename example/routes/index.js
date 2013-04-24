
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Snorfort!' });
};

exports.beers = function (req, res) {
  res.send([
    {id: 1, name: "Leffe Blond", alc: 6.6, type: 'Ale'},
    {id: 2, name: "Mariestad Export", alc: 5.3, type: 'Lager'},
    {id: 3, name: "Sofiero Original", alc: 5.2, type: 'Blask'},
    {id: 4, name: "Rochefort 8", alc: 9.4, type: 'Trappist'}
  ]);
};
