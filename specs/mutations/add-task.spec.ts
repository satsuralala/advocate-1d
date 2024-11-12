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
        .mockRejectedValueOnce(new Error("task cannot be empty"))
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
        try {
            await addTask({}, { taskName: "task2", priority: 1 });
        } catch (error: unknown) {  
            if (error instanceof Error) { 
                expect(error.message).toBe("failed to add a task");
            } else {
                throw error; 
            }
            
        }        
    });

    it("Should throw an error when  task is empty", async()=>{
        try {
            await addTask({}, { taskName: "", priority: 8 });
        } catch (error) {  
            if(error instanceof Error){
                expect(error.message).toEqual("task cannot be empty")
            }else{
                throw error;
            }
        }

    });
    
    
})