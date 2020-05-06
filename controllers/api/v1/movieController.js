const Movie=require('../../../model/movie');

module.exports.create=async function (req,res)
{
    try
    {
          let movie=await Movie.create(req.body);

          return res.json(200,
            {
                msg:'Movie added successfully',
                data:movie
            })
    }catch(err)
    {
         return res.json(500,
            {
                msg:'Internal Server Error '
            });
    }
}

module.exports.showAllMovie=async function(req,res)
{
    try
    {
          let movie=await Movie.find({});

          return res.json(200,
            {
                msg:'Movie list req success',
                data:movie
            })
    }catch(err)
    {
         return res.json(500,
            {
                msg:'Internal Server Error '
            });
    }
}

module.exports.showMovieByGenre=async function(req,res)
{
    try
    {
          let movie=await Movie.find({genre:req.query.type});

          return res.json(200,
            {
                msg:'Movie list with genre',
                data:movie
            })
    }catch(err)
    {
         return res.json(500,
            {
                msg:'Internal Server Error '
            });
    }
}


module.exports.deleteMovie=async function (req,res)
{
    try
    {
          let movie=await Movie.findById(req.params.id);

          if(movie)
          {
              movie=await Movie.findByIdAndDelete(req.params.id);
              return res.json(200,
                {
                    msg:'Movie deleted ',
                    
                })

          }
          else{
            return res.json(400,
                {
                    msg:'Movie with id not found',
                  
                })
          }

         
    }catch(err)
    {
         return res.json(500,
            {
                msg:'Internal Server Error '
            });
    }
}

module.exports.updateGenre=async function(req,res)
{
    try
    {
          let movie=await Movie.findById(req.params.id);

          if(movie)
          {
              movie=await Movie.findByIdAndUpdate({genre:req.body.genre});
              return res.json(200,
                {
                    msg:'Movie  updated ',
                    data:movie
                    
                })

          }
          else{
            return res.json(400,
                {
                    msg:'Movie with id not found',
                  
                })
          }

         
    }catch(err)
    {
         return res.json(500,
            {
                msg:'Internal Server Error '
            });
    }
}