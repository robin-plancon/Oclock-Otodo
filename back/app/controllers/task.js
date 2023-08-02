const { Task } = require('../models');

const taskController = {

    async listTasks (req, res) {
        try {
            const tasks = await Task.findAll();
            res.json(tasks);
        } catch (err) {
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },

    async addTask(req, res) {
        try {
            const task = await Task.create({ ...req.body });
            res.json(task);
        } catch (err) {
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const task = await Task.update({ ...req.body },
                { where: { id: id},
            returning: true,
        });
            if (task[0] === 0) {
                return res.status(404).json('Task not found');
            }
            return res.json(task);
        } catch (err) {
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },

    async deleteTask(req, res) {
        const { id } = req.params;
        try {
            const task = await Task.destroy({ where: { id: id } });
            if (task === 0) {
                return res.status(404).json('Task not found');
            }
            return res.json('Task deleted');
        } catch (err) {
            console.trace(err);
            res.status(500).json(err.toString());
        }
    },
};

module.exports = taskController;
