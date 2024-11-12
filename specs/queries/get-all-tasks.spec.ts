import { getAllTasks } from "@/graphql/resolvers/queries/get-all-tasks";

jest.mock("../../graphql/models/Tasks", ()=>({
    Task:{
        find:jest.fn()
        .mockResolvedValueOnce([{
            taskName:"tasks",
            priority:3,
            isDone:true,
        }]).mockRejectedValueOnce(new Error('failed to get all tasks'))
    },
}));

describe("get all tasks query", ()=>{
    it('should get all tasks', async()=>{
        const res=await getAllTasks();
        expect(res).toEqual([
            {'taskName':'tasks', 'priority':3,"isDone":true}
        ]);
    })
});

it('should throw an error if smth failed', async()=>{
    try{
        await getAllTasks();
    }catch(error){
        if(error instanceof Error){
            expect(error.message).toBe("failed to get all tasks")
        }else{
            throw error;
        }
    };
});

