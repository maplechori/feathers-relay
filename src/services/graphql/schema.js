import { GraphQLScalarType } from 'graphql/type';

const Date = new GraphQLScalarType({
  name: 'Date',
  serialize(value) {
    return value;
  },
});



const typeDefinitions = `
    scalar Date


  type SMSRespondentInfo {
    address1: String
    address2: String
    zip: String
    city: String
    telephone1: String
    telephone2: String
    age: Int
    sex: Int
    firstName: String
    lastName: String
    householdId: Int
    householdOrder: Int
    householdHead: Int
    selected: Boolean
    present: Boolean
    financial: Boolean
    family: Boolean
    coverscreen: Boolean
    birthdate: String
    info: String
    puid: Int
    remarks: [SMSRemarks]
    contacts: [SMSContacts]
    email: String
  }

  type SMSRemarks {
      _id: String!
      date: Date
      message: String
  }

  type SMSContacts {
     date: Date
     refusal: Boolean
     finalCode: Boolean
  }

  type User {
    _id: String!
    loginCode: String
    info: SMSRespondentInfo
    longitude: String
    latitude: String
    ip: String
    status: Int
  }

  type Respondent {
      _id: String!
      loginCode: String
      info: SMSRespondentInfo
      longitude: String
      latitude: String
      ip: String
      status: Int
  }


  type Survey {
    _id: String!
    name: String
    description: String
    type: [SurveyType]
    group: [SurveyGroup]
    section: [SurveySection]
    title: String
  }

  type SurveySection {
      _id: String!
      parent: String
      name: String
      description: String
      hidden: Boolean
  }

  type SurveyGroup {
    _id : String!
    name: String!
    parent: [SurveyGroup]
    type: String
  }

  type SurveyType {
    _id : String
    name: String
    description: String
    answerType: String
  }

  type Question {
    _id: String
    answer: String
 }


  type RootQuery {
    respondent: User
  }

  type AuthPayload {
    token: String # JSON Web Token
    data: User
  }

  type RootMutation {
    logIn(username: String!
          password: String!
        ): AuthPayload
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
  `;


  export default [typeDefinitions];
