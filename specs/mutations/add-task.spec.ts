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
<<<<<<< Updated upstream
        }).mockRejectedValueOnce(new Error("failed to add a task"))
        .mockRejectedValueOnce(new Error("task cannot be empty"))
=======
        }).mockRejectedValueOnce(new Error("error happened during adding the task"))
>>>>>>> Stashed changes
    },
}));

describe("Adding task mutation",()=>{
    it("Should add a task successfully", async()=>{
<<<<<<< Updated upstream
        const res=await addTask({},{taskName:"task1", priority:8});
        expect(res).toHaveProperty("taskName", "task1");
        expect(res).toHaveProperty("priority", 8);
        expect(res.isDone).toStrictEqual(false);
=======
        const res=await addTask({},{taskName:"test task", priority:9});
        expect(res).toHaveProperty("taskName", "task1");
        expect(res).toHaveProperty("priority", 8);
        expect(res.isDone).toEqual(false);
>>>>>>> Stashed changes
    })

    it("Should throw an error when task creation fails", async () => {
        try {
<<<<<<< Updated upstream
            await addTask({}, { taskName: "task2", priority: 1 });
        } catch (error: unknown) {  
            if (error instanceof Error) { 
                expect(error.message).toBe("failed to add a task");
=======
            await addTask({}, { taskName: "test task", priority: 8 });
        } catch (error: unknown) {  
            if (error instanceof Error) { 
                expect(error.message).toBe("Error during task creation");
>>>>>>> Stashed changes
            } else {
                throw error; 
            }
            
<<<<<<< Updated upstream
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

=======
        }
    
        try {
            await addTask({}, { taskName: "", priority: 8 });
        } catch (error) {  
            expect((error as Error).message).toBe("Validation failed: taskName cannot be empty");
        }
>>>>>>> Stashed changes
    });
    
    
})