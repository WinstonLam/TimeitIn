import Redux from "redux";
console.clear();

// Action creators

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: { name, amount },
  };
};

const deletePolicy = (name) => {
  return { type: "DELETE_POLICY", payload: { name } };
};

const createClaim = (name, claimAmount) => {
  return { type: "CREATE_CLAIM", payload: { name, claimAmount } };
};
// Reducers

// oldListOfClaims will be defaulted to empty list if it is undefined
const claimsHistory = (oldListOfClaims = [], action) => {
  // we care about this action (FORM!)
  if (action.type === "CREATE_CLAIM") {
    // returns new copy of array with new item appanded at back
    // it is important that we create a new copy instead of
    // adjusting the existing array!!!
    return [...oldListOfClaims, action.payload];
  }
  // we don't care about this action (FORM!)
  return oldListOfClaims;
};

// cashStorage will be defaulted to 100 on undefined
const acounting = (cashStorage = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return cashStorage - action.payload.claimAmount;
  } else if (action.type === "CREATE_POLICY") {
    return cashStorage + action.payload.amount;
  }

  return cashStorage;
};

const policies = (policyList = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...policyList, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return policyList.filter((name) => name !== action.payload.name);
  }

  return policyList;
};

// Redux in action

const { createStore, combineReducers } = Redux;

// combineReducers winds up all the reducers into the state
const ourDepartments = combineReducers({
  acounting: acounting,
  claimsHistory: claimsHistory,
  policies: policies,
});

const store = createStore(ourDepartments);

// Dispatchers which are send to all departments at
// the same time

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Lynn", 15));

store.dispatch(createClaim("Alex", 120));
store.dispatch(createClaim("Jim", 15));

store.dispatch(deletePolicy("Lynn"));

// by getting the state we can see everything at once
console.log(store.getState());
