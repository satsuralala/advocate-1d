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
<<<<<<< Updated upstream
        }).mockRejectedValueOnce(new Error("failed to add a task"))
        .mockRejectedValueOnce(new Error("task cannot be empty"))
=======
        }).mockRejectedValueOnce(new Error("error happened during adding the task"))
>>>>>>> Stashed changes
=======
        }).mockRejectedValueOnce(new Error("failed to add a task"))
        .mockRejectedValueOnce(new Error("task cannot be empty"))
>>>>>>> Stashed changes
    },
}));

describe("Adding task mutation",()=>{
    it("Should add a task successfully", async()=>{
<<<<<<< Updated upstream
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
=======
        const res=await addTask({},{taskName:"task1", priority:8});
        expect(res).toHaveProperty("taskName", "task1");
        expect(res).toHaveProperty("priority", 8);
        expect(res.isDone).toStrictEqual(false);
>>>>>>> Stashed changes
    })

    it("Should throw an error when task creation fails", async () => {
        try {
<<<<<<< Updated upstream
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
=======
            await addTask({}, { taskName: "task2", priority: 1 });
        } catch (error: unknown) {  
            if (error instanceof Error) { 
                expect(error.message).toBe("failed to add a task");
>>>>>>> Stashed changes
            } else {
                throw error; 
            }
            
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
        }        
    });

    it("Should throw an error when  task is empty", async()=>{
<<<<<<< Updated upstream
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
    
=======
>>>>>>> Stashed changes
        try {
            await addTask({}, { taskName: "", priority: 8 });
        } catch (error) {  
            if(error instanceof Error){
                expect(error.message).toBe("task cannot be empty")
            }else{
                throw error;
            }
        }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
    });
    
    
})