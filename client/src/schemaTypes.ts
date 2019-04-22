/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  _id: string;
  email: string;
  typeOfUser: string;
  ccLast4: string | null;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateSubscriptionMutation
// ====================================================

export interface CreateSubscriptionMutation_createSubscripton {
  __typename: "User";
  _id: string;
  email: string;
  typeOfUser: string;
  ccLast4: string | null;
}

export interface CreateSubscriptionMutation {
  createSubscripton: CreateSubscriptionMutation_createSubscripton;
}

export interface CreateSubscriptionMutationVariables {
  source: string;
  ccLast4: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCardMutation
// ====================================================

export interface UpdateCardMutation_createSubscripton {
  __typename: "User";
  _id: string;
  email: string;
  typeOfUser: string;
  ccLast4: string | null;
}

export interface UpdateCardMutation {
  createSubscripton: UpdateCardMutation_createSubscripton;
}

export interface UpdateCardMutationVariables {
  source: string;
  ccLast4: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login {
  __typename: "User";
  _id: string;
  email: string;
  typeOfUser: string;
  ccLast4: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login | null;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation {
  register: boolean;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserInfo
// ====================================================

export interface UserInfo {
  __typename: "User";
  _id: string;
  email: string;
  typeOfUser: string;
  ccLast4: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
