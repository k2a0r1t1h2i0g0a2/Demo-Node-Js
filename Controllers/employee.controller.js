const employees = [{
    id:1,name :"karthiga"
},
{
    id:2,name :"karthi"
},
{
    id:3,name :"krishna"
},
{
    id:4,name :"kathir"
    },
{id:5,name:"aathi"}

]


export const employeesDetail = (req, res) => {
    res.status(200).json({data:employees})
}


export const employeesId = (req, res) => {
    const empId = req.params.id
    const empIdDetail = employees.find(emp => emp.id == empId)
    if (!empIdDetail) {
        return res.status(404).json({message:"detail not found in particular id"})
    }
    res.status(202).json({message:"employee details" , data:empIdDetail})
}
export const createEmpDetail = (req, res) => {
    const newEmpDetail = {
        id:employees.length+1,
        name :req.body.name
    }

    employees.push(newEmpDetail)
    res.status(200).json({message:"employee detail added",data:newEmpDetail})
}


export const updateEmpDetail = (req, res) => {
    const empId = req.params.id;
    const empDetail = employees.find(emp => emp.id == empId)
    if (!empDetail) {
        return res.status(404).json({message:"employee detail not found"})
    }
    empDetail.name =req.body.name
    res.status(202).json({message:"detail updated",data:empDetail})
}

export const deleteEmpDetail = (req,res)=> {
    const empId = req.params.id
    const empIndex = employees.findIndex(emp => emp.id == empId)
    
    if (!empIndex === -1) {
        return res.status(404).json({ message:"detail not found"})
    }
  employees.splice(empIndex,1)
    return res.status(202).json({message:" emp detail deleted"})
};