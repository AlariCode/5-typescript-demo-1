"use strict";
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Пользователь не админ');
}
assertUser({});
