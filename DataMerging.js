const data = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];



const res = data.reduce((acc,current)=>{
    const existing = acc.find((obj)=>obj.user ==current.user);
    if(existing){
        return acc.map((obj)=>obj.user === current.user ? {
        ...obj,...current,duration:obj.duration+current.duration,equipment:[...obj.equipment,...current.equipment]
        } : obj)
    } else{
        return [...acc,current]
    }
},[])

console.log(res,"res")
