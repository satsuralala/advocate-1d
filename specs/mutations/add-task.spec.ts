import { Task } from "@/graphql/models/Tasks";
import { addTask } from "@/graphql/resolvers/mutations/add-task";

jest.mock("../../graphql/models/Tasks",()=>({
    Task:{
        create:jest.fn().mockResolvedValueOnce({
            taskName:"task1",
            priority:8,
            isDone:false,
            createdAt:new Date(),
            updatedAt:new Date(),
        }).mockRejectedValueOnce(new Error("failed to add a task"))
       
    },
}));

describe("Adding task mutation",()=>{
    it("Should add a task successfully", async()=>{
        const res=await addTask({},{taskName:"task1", priority:8});
        expect(res).toHaveProperty("taskName", "task1");
        expect(res).toHaveProperty("priority", 8);
        expect(res.isDone).toStrictEqual(false);
    })

    it("Should throw an error when task creation fails", async () => {
            const res=await addTask({}, { taskName: "task2", priority: 1 });
            expect(res).toEqual(new Error("failed to add a task"))
    }); 
})