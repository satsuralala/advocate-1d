import { getFinishedTasksLists } from "@/graphql/resolvers/queries/get-finished-tasks-lists";

jest.mock('../../graphql/models/Tasks', ()=>({
    Task:{
        find:jest.fn().mockResolvedValueOnce([{
            taskName:'finished tasks',
            priority:8,
            isDone:true,
        }]).mockRejectedValueOnce(new Error ("failed to get all finished tasks"))
    }
}));

describe("get finished tasks query", ()=>{
    it("should get all finished tasks", async()=>{
        const res=await getFinishedTasksLists();
        expect(res).toEqual([{
            taskName:"finished tasks",
            priority:8,
            isDone:true,
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