import { Task } from "@/graphql/models/Tasks";
import { updateTask } from "@/graphql/resolvers/mutations/update-task";

jest.mock("../../graphql/models/Tasks", () => ({
  Task: {
    findByIdAndUpdate: jest.fn()
      .mockResolvedValueOnce({
        _id: '123',
        taskName: 'updated task',
        priority: 3,
        isDone: true,
        updatedAt: new Date(),
      })
      .mockRejectedValueOnce(new Error('Error happened during task updating process'))
  }
}));

describe("Update the task mutation", () => {
  it("should update the previous task successfully", async () => {
    const res = await updateTask({}, {
      _id: "123",
      taskName: "updated task",
      priority: 3,
      isDone: true,
    });

    expect(res).toEqual({
      _id: '123',
      taskName: 'updated task',
      priority: 3,
      isDone: true,
      updatedAt: expect.any(Date),
    });
  });

  it("should throw an error if task is not found", async () => {

    try {
      await updateTask({}, {
        _id: '321',
        taskName: "nonexistent task",
        priority: 3,
        isDone: false,
      });
    } catch (error) {
        if(error instanceof Error){
            expect(error.message).toEqual("failed to update the task")
        }else{
            throw error;
        }
    }
  });

  it("should handle other errors during task update", async () => {
    try {
      await updateTask({}, {
        _id: '123',
        taskName: "example task",
        priority: 4,
        isDone: false,
      });
    } catch (error) {
        if(error instanceof Error){
            expect(error.message).toEqual("failed to update the task")
        }else{
            throw error;
        }
    }
  });
});
