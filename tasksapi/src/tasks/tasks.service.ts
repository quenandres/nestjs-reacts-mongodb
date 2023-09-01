import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
@Injectable()
export class TasksService {
    constructor( @InjectModel(Task.name) private taskModel: Model<Task> ){}

    findAll() {
        this.taskModel.find();
    }

    create(createTask: any) {
        const createdTask = this.taskModel.create(createTask);
        return createdTask;
    }

    async findOne(id: string) {
        return this.taskModel.findById(id);
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }

    async update(id: string, task: any) {
        return this.taskModel.findByIdAndUpdate(id);
    }
}
