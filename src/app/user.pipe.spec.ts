import { UserPipe } from './user.pipe';
let users=[{
  name:"siemens"
},
{
  name:"citi"
},
{
  name:"HCL"
},
{
  name:"scope"
}
]

describe('UserPipe', () => {
  it('create an instance', () => {
    const pipe = new UserPipe();
    expect(pipe).toBeTruthy();
  });
  
  it('ensure transform returns array', () => {
    const pipe = new UserPipe();
    expect(pipe.transform(users,"s").length).toBeGreaterThan(0);
  });


});
