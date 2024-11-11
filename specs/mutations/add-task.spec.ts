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
        }).mockRejectedValueOnce(new Error("error happened during adding the task"))
    },
}));

describe("Adding task mutation",()=>{
    it("Should add a task successfully", async()=>{
        const res=await addTask({},{taskName:"test task", priority:9});
        expect(res).toHaveProperty("taskName", "task1");
        expect(res).toHaveProperty("priority", 8);
        expect(res.isDone).toEqual(false);
    })

    it("Should throw an error when task creation fails", async () => {
        try {
            await addTask({}, { taskName: "test task", priority: 8 });
        } catch (error: unknown) {  
            if (error instanceof Error) { 
                expect(error.message).toBe("Error during task creation");
            } else {
                throw error; 
            }
            
        }
    
        try {
            await addTask({}, { taskName: "", priority: 8 });
        } catch (error) {  
            expect((error as Error).message).toBe("Validation failed: taskName cannot be empty");
        }
    });
    
    
})