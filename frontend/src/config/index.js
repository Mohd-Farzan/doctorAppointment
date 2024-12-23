export const registerFormControls=[
    {
        name:'userName',
        label:"user Name",
        placeholder:"enter your name ",
        componentType:"input",
        type:"text",
        unique:true
    },
    {
        name:'email',
        label:"email",
        placeholder:"enter your email ",
        componentType:"input",
        type:"email",
        unique:true
    },
    {
        name:'password',
        label:"password",
        placeholder:"enter your password ",
        componentType:"input",
        type:"password",
    }
];
export const loginFormControls=[
    {
        name:'email',
        label:"email",
        placeholder:"enter your email ",
        componentType:"input",
        type:"email",
        unique:true
    },
    {
        name:'password',
        label:"password",
        placeholder:"enter your password ",
        componentType:"input",
        type:"password",
    }
   
]
export const navbarItems=[
    {
    id:'home',
    lable:'Home',
    path:'/home/welcome'
    },
    {
        id:'doctor',
        lable:'Find doctor',
        path:'/home/doctorlist'
    },
    {
        id:'medicines',
        lable:'Buy Medicines',
        path:'/home/medicines'
    },
    
]
export const forgotpswrd=[
    {
        name:'email',
        label:"Email",
        placeholder:'enter your registered email',
        componentType:"input",
        type:'email',
    }
]
export const profileFormControls=[
    {
        name:'email',
        label:'Email',
        placeholder:'ENter your email',
        componentType:'input',
        type:'email',
    },
    {
        name:'password',
        label:'Password',
        placeholder:'ENter your Password',
        componentType:'input',
        type:'password',
    },
    {
        name:'userName',
        label:'user name',
        placeholder:'ENter your user name',
        componentType:'input',
        type:'text',
    }
    
]
