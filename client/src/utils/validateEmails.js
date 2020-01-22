//mail regex for code in 're variable'
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//This method is used to verify if emails are valid and organize them
export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false);

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }
    return;
};