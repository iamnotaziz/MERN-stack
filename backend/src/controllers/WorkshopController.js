const Workshop = require("../models/WorkShopModel");

const getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find();

    res.status(200).json({
      status: "success",
      results: workshops.length,
      data: {
        workshops,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message || "Some error occurred while retrieving workshops.",
    });
  }
};

const createWorkshop = async (req, res) => {
  const workshop = new Workshop({
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
  });

  await workshop
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Workshop.",
      });
    });
};

const getWorkshopsById = async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id);
        if(workshop){
            res.status(200).json({
                status: "success",
                data:{
                    workshop
                },

            })
        }
    }catch (err) {
        res.status(404).json({
            status: "fail",
            message:
          err.message || "Some error occurred while creating the Workshop.",
})};
    }

const deleteWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id);
          if (workshop) {
            res.status(200).json({
              status: "success",
              message: "Workshop deleted successfully",
              data: {
                workshop
            }
        });
        } else {
            res.status(404).json({
              status: "fail",
              message: "Workshop not found"
            });
          }
        } catch (err) {
          res.status(500).json({
            status: "error",
            message: err.message || "Some error occurred while deleting the Workshop."
        });
    }
};
const updateWorkshop = async (req, res) => {
    try {
      const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body);
  
      if (workshop) {
        res.status(200).json({
          status: "success",
          message: "Workshop updated successfully",
          data: {
            workshop
          }
        });
      } else {
        res.status(404).json({
          status: "fail",
          message: "Workshop not found"
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message || "Some error occurred while updating the Workshop."
      });
    }
  };
  

module.exports = {
  createWorkshop,
  getAllWorkshops,
  deleteWorkshop,
  getWorkshopsById,
  updateWorkshop,
};