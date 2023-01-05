let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

function countActiveUsers(users) {
    
    let userActive = 0;
    
    for(let i = 0; i < users.length; i++)
    {   
        
    
        if (users[i].isActive === true)
        {
            userActive = userActive + 1 ;
            
        }
    }
    return userActive ;
    
}
console.log(`We currently have ${ countActiveUsers(users) } active users.`);


function hasBlueEyes(activeUsers) {
    let userBlueEyes = 0;
    
    for(let i = 0; i < users.length; i++)
    {   
        
    
        if ((users[i].eyeColor === "blue") && (users[i].isActive === true))
        {
            userBlueEyes = userBlueEyes + 1 ;
            
        }
    }
    return userBlueEyes ;
}

console.log(`Out of our currently ${ countActiveUsers(users) } active users, ${ hasBlueEyes(users) } have blue eyes.`);



function computeActiveUsersAverageAge(users) {
    
    let userAge = 0;
    let average ;
    let userActive = [];
    
    for(let i = 0; i < users.length; i++)
    {   
        
    
        if (users[i].isActive === true)
        {
            userActive.push(users[i]); 
        }
    }
    
    for (let i = 0; i < userActive.length; i++) 
    {
        userAge = userAge + userActive[i].age;
        average = (userAge / userActive.length);
    }
    
    return average ;
}

console.log(`Out of our currently ${ countActiveUsers(users) } active users, the average age is ${ computeActiveUsersAverageAge(users) }.`);

function getMultronUsers(users) {
    
    let MultronUsers = [];
    
    for(let i = 0; i < users.length; i++)
    {   
        
    
        if (users[i].company === "MULTRON")
        {
            MultronUsers.push(users[i]);
            
        }
    }
        for (let i = 0; i < MultronUsers.length; i++) 
    {   
        MultronUsers[i].company = "CENTURIA";
    }
    return MultronUsers.length ;
}


console.log(`${ getMultronUsers(users) } user companies have been changed from MULTRON to CENTURIA.`);



function excludeCenturiaBrownEyedWorkers(users) {
    let CenturiaBrownEyedWorkers = [];
    
    for(let i = 0; i < users.length; i++)
    {
        if ((users[i].eyeColor === "brown") && (users[i].company !== "CENTURIA"))
        {
            CenturiaBrownEyedWorkers.push(users[i]);
            console.log(CenturiaBrownEyedWorkers.name);
        }
    }
    console.log(CenturiaBrownEyedWorkers.name);
        
    return CenturiaBrownEyedWorkers.name ;
}

console.log(`${ excludeCenturiaBrownEyedWorkers(users) } users with brown eyes do not work at CENTURIA`);

console.log(users)