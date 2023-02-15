exports.GetHelloWorld = (req, res, next) => {

    res.status(200).json({title : "hello World(s)"});

}