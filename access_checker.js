function isAllowedAccess(user) {
  if (user.isAdmin) {
    if (user.age >= 18 && user.age <= 35) return true;
    return false;
  } else if (
    user.age >= 18 &&
    user.age <= 35 &&
    user.paid &&
    !user.blocked &&
    !user.badUsername
  ) {
    return true;
  }
  return false;
}

function isAllowedAccessTernary(user) {
  return user.isAdmin
    ? user.age >= 18 && user.age <= 35
      ? true
      : false
    : user.age >= 18 &&
      user.age <= 35 &&
      user.paid &&
      !user.blocked &&
      !user.badUsername
    ? true
    : false;
}

/**/
admin = {
  age: 18,
  paid: false,
  blocked: false,
  badUsername: false,
  isAdmin: true,
};
youngAdmin = {
  age: 17,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: true,
};
validUser = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false,
};
notValidUser = {
  age: 90,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false,
};

console.log(isAllowedAccess(admin));
console.log(isAllowedAccess(youngAdmin));
console.log(isAllowedAccess(validUser));
console.log(isAllowedAccess(notValidUser));

console.log(isAllowedAccessTernary(admin));
console.log(isAllowedAccessTernary(youngAdmin));
console.log(isAllowedAccessTernary(validUser));
console.log(isAllowedAccessTernary(notValidUser));