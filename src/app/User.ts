interface iUser {
    uid: number,
    name: string,
    email: string,
    contact_no: string
    address: string
}

export const USER: iUser =  {
    uid: 700,
    name: "James Bond",
    email: "james.bond@email.com",
    contact_no: "1234567890",
    address: "21 Baker Street, London"
}