export let VIEW_PROFILE = '@@profiles/VIEW_PROFILE';

export let viewProfile = (userId, userName, status, phone) => ({
    type: VIEW_PROFILE,
    userId,
    userName,
    status,
    phone
});