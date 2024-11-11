import { getFinishedTasksLists } from "@/graphql/resolvers/queries/get-finished-tasks-lists";

jest.mock('../../graphql/models/Tasks', async()=>({
    Task:{
        find:jest.fn().mockResolvedValueOnce({
            taskName:'finished tasks',
            priority:8,
            isDone:false,
        }).mockRejectedValueOnce(new Error ("error happened in getting all finished tasks"))
    }
}));

describe("get finished tasks query", async()=>{
    it("should get all finished tasks", async()=>{
        const res=await getFinishedTasksLists();
        expect(res).toEqual([{
            taskName:"finished tasks",
            priority:8,
            isDone:false,
        }]);
    });

    it("should an throw error if smth failed", async()=>{
        try{
            await getFinishedTasksLists();

        }catch(error){
            if(error instanceof Error){
                expect(error.message).toEqual("failed to get all finished tasks")
            }else{
                throw error;
            }
        }  
    });
});