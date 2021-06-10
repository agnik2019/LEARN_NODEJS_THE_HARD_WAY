module.exports = function asyncMiddleware(handler) {
    return async (req,res,next) => {
    try{
     await hsndler(req,res);
    }
    catch(ex){
      next(ex);
    }
  }
  };