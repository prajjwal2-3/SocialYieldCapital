
 export  function generateRandomPassword(length:number) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password+'1';
}


export  function generateRandomGmailId() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const usernameLength = 10; // You can set the desired username length here
    let username = "";
    for (let i = 0, n = charset.length; i < usernameLength; ++i) {
        username += charset.charAt(Math.floor(Math.random() * n));
    }
    return username + "@gmail.com";
}

export function generateRandomMobileNumber() {
    let mobileNumber = "9"; // Start with a digit that is typical for mobile numbers in many regions
    for (let i = 0; i < 9; ++i) {
        mobileNumber += Math.floor(Math.random() * 10).toString();
    }
    return mobileNumber;
}



export function generateRandomGibberishName() {
    const charset = "abcdefghijklmnopqrstuvwxyz";
    let name = "";
    const nameLength = Math.floor(Math.random() * 5) + 3; // Random name length between 3 and 7 characters
    for (let i = 0, n = charset.length; i < nameLength; ++i) {
        name += charset.charAt(Math.floor(Math.random() * n));
    }
    return name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter
}




