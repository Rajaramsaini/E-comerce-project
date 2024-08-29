export const setUser = (user)=>({
    type: "SET_USER",
    payload: user,
});

export const signOut = ()=>({
    type:"SING_OUT",
});